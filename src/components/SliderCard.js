import { Box, IconButton, makeStyles, Paper, Typography, useTheme } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import ApiRoutes from "../utils/apiRoutes";
import moment from 'moment-jalaali';

const useStyle = makeStyles(theme => ({
    root: {
        borderRadius: theme.shape.borderRadius,
        border: '1px solid',
        borderColor: theme.palette.grey[300],
        padding: theme.spacing(2),
        display: 'flex',
        width: '45%',
        maxHeight: 200,
        margin: 8,
        position: 'relative'
    },
    imageWrap: {
        flex: 1,
        marginRight: theme.spacing(2),
        display: 'flex',
        height: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: theme.shape.borderRadius
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
    }
}))
const SliderCard = ({ sliderItem}) => {
    const classes = useStyle();
    const theme = useTheme();

    return (
        <Paper elevation={2} className={classes.root}>
            <Box className={classes.imageWrap}>
                <img src={ApiRoutes.baseUrl + ApiRoutes.file + sliderItem.image.id} width='100%' />
            </Box>
            <Box className={classes.infoWrap}>
                <Typography variant='body1' style={{ fontWeight: 500 }}>{sliderItem.name}</Typography>

                <Box display='flex' mt={1}>
                    <Typography variant='body2' className={classes.createdAt} color='textSecondary'>بارگذاری شده در: </Typography>
                    <Typography variant='body2'>{moment(sliderItem.created,'YYYY-MM-DDTHH:mm:ss.sssZ').format('jYYYY/jMM/jDD')}</Typography>
                </Box>
                <Box display='flex' mt={1}>
                    <Typography variant='body2' className={classes.createdAt} color='textSecondary'>توسط: </Typography>
                    <Typography variant='body2'>{sliderItem.createdBy.username}</Typography>
                </Box>
                <Box display='flex' mt={1}>
                    <Typography variant='body2' className={classes.createdAt} color='textSecondary'>وضعیت: </Typography>
                    <Typography variant='body2'>فعال</Typography>
                </Box>
                <Box className={classes.actionWrap}>
                    <IconButton color='primary'>
                        <Edit fontSize='small' />
                    </IconButton>
                    <IconButton>
                        <Delete fontSize='small' htmlColor={theme.palette.grey[700]} />
                    </IconButton>
                </Box>
            </Box>
        </Paper>
    )
}

export default SliderCard
