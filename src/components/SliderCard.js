import React from 'react';
import { Box, IconButton, makeStyles, Paper, Typography, useTheme, Chip } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import ApiRoutes from "../utils/apiRoutes";
import moment from 'moment-jalaali';
import { sliderApi } from '../services/api';
import useSnack from '../hooks/useSnack';
import { observer } from 'mobx-react-lite';
import SliderStore from '../states/Slider';


const useStyle = makeStyles(theme => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        border: '1px solid',
        borderColor: theme.palette.grey[300],
        backgroundColor: '#fbfbfb',
        padding: theme.spacing(2),
        display: 'flex',
        width: '100%',
        maxHeight: 200,
        position: 'relative'
    },
    imageWrap: {
        flex: 1,
        marginRight: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: theme.shape.borderRadius,
        height: '100%',
        border: '1px solid',
        borderColor: theme.palette.grey[300]
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    infoWrap: {
        flex: 2
    },
    createdAt: {
        marginRight: theme.spacing(1)
    },
    actionWrap: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: theme.spacing(1)
    },
    actionItem: {
        marginLeft: theme.spacing(1)
    },
    chip: ({ status }) => ({
        borderRadius: theme.spacing(1.5),
        backgroundColor: status === 'active' ? theme.palette.success.light : theme.palette.error.light,
        color: status === 'active' ? theme.palette.success.main : theme.palette.error.main,
        padding: theme.spacing(0.3, 1),
        minWidth: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
}))
const SliderCard = observer(({ sliderItem }) => {
    const classes = useStyle({ status: sliderItem.status });
    const theme = useTheme();
    const { defaultSnack } = useSnack();


    const handleRemove = (id) => async (e) => {
        try {
            const result = await sliderApi.removeSlider(id);
            SliderStore.removeItem(id)
            defaultSnack('درخواست شما با موفقیت ثبت شد.', 'success')
        } catch (error) {
            defaultSnack('مشکلی پیش آمده است. دوباره سعی کنید.', 'error')
        }
    }

    return (
        <Paper elevation={0} className={classes.root}>
            <Box className={classes.imageWrap}>
                <img src={ApiRoutes.baseUrl + '/file/' + sliderItem.image.id} className={classes.image} alt={`${sliderItem.name} bg for company`} />
            </Box>
            <Box className={classes.infoWrap}>
                <Typography variant='body1' style={{ fontWeight: 500 }}>{sliderItem.name}</Typography>

                <Box display='flex' mt={1}>
                    <Typography variant='body2' className={classes.createdAt} color='textSecondary'>بارگذاری شده در: </Typography>
                    <Typography variant='body2'>{moment(sliderItem.created, 'YYYY-MM-DDTHH:mm:ss.sssZ').format('jYYYY/jMM/jDD')}</Typography>
                </Box>
                <Box display='flex' mt={1}>
                    <Typography variant='body2' className={classes.createdAt} color='textSecondary'>توسط: </Typography>
                    <Typography variant='body2'>{sliderItem.createdBy.username}</Typography>
                </Box>
                <Box display='flex' mt={1} alignItems='center'>
                    <Typography variant='body2' className={classes.createdAt} color='textSecondary'>وضعیت: </Typography>
                    <Box className={classes.chip} >
                        <Typography variant='body2'>{sliderItem.status === 'active' ? 'فعال' : 'غیرفعال'}</Typography>
                    </Box>
                </Box>
                <Box className={classes.actionWrap}>
                    <IconButton color='primary'>
                        <Edit fontSize='small' />
                    </IconButton>
                    <IconButton onClick={handleRemove(sliderItem.id)}>
                        <Delete fontSize='small' htmlColor={theme.palette.grey[700]} />
                    </IconButton>
                </Box>
            </Box>
        </Paper >
    )
})

export default SliderCard
