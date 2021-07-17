import { Box, Button, createStyles, Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import { AddCircle, ClearAllOutlined } from "@material-ui/icons"
import { observer } from "mobx-react-lite"
import React, { useContext, useEffect, useState } from "react"
import MainContentPaper from "../../components/MainContentPaper"
import { sliderApi } from "../../services/api"
import { MenuEnum, menuStore } from "../../states/MenuStateProvider"
import SliderStore from "../../states/Slider"
import AddSlider from "./AddSlider"
import SliderList from "./SliderList"


const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        marginTop: theme.spacing(-20),
        width: 1126,
        justifyContent: 'center',
        // background: theme.palette.primary.main,
        [theme.breakpoints.down('lg')]: {
            width: 699,
        },
        [theme.breakpoints.down('md')]: {
            width: 484,
        },
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${theme.spacing(5)})`,
            margin: theme.spacing(1),
            marginTop: theme.spacing(3),
        },
    },
    balance: {
        padding: theme.spacing(2),
        margin: theme.spacing(0, 1.5, 2),
        height: 800,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0)
        }
    },
    addBtn: {
        boxShadow: 'unset',
        border: `solid 1px ${theme.palette.grey[300]}`,
        padding: theme.spacing(1, 3),
        color: '#fff',
        '&:hover': {
            boxShadow: 'unset',
        }
    }
})
)

const Slider = observer(() => {
    const classes = useStyles()
    const { menuDispatch } = useContext(menuStore);
    const [isNewSlider, setIsNewSlider] = useState(false);

    useEffect(() => {
        getSliders()
    }, [])

    useEffect(() => {
        menuDispatch && menuDispatch({ type: 'ChangeActiveMenu', newMenu: MenuEnum.Slider });
    }, [menuDispatch])

    const toggleSlider = () => {
        setIsNewSlider(prev => !prev)
    }

    const getSliders = async () => {
        try {
            const result = await sliderApi.list();
            SliderStore.setList(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    const sliderViewHandler = (status) => {
        setIsNewSlider(status)
    }

    return (
        <MainContentPaper>
            <Box display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <Box>
                    <Typography variant='h6'>تنظیمات اسلایدر</Typography>
                    <Typography variant='body1' color='textSecondary'>در این بخش می‌توانید اسلایدرهای سایت را مدیریت کنید.</Typography>
                </Box>

                <Button
                    startIcon={isNewSlider ? <ClearAllOutlined fontSize='small' /> : <AddCircle fontSize='small' />}
                    onClick={toggleSlider}
                    className={classes.addBtn}
                    color='primary'
                    variant='contained'
                >
                    <Typography variant='body1' component='p' >{isNewSlider ? 'لیست اسلایدر' : 'افزودن اسلایدر'}</Typography>
                </Button>
            </Box>
            <Divider />

            {isNewSlider ? <AddSlider sliderViewHandler={sliderViewHandler} /> : <SliderList />}



        </MainContentPaper>
    )
})

export default Slider
