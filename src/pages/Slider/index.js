import { Box, Button, createStyles, Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import { AddCircle, ClearAllOutlined } from "@material-ui/icons"
import { useContext, useEffect, useState } from "react"
import SliderCard from "../../components/SliderCard"
import { sliderApi } from "../../services/api"
import { MenuEnum, menuStore } from "../../states/MenuStateProvider"
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
        boxShadow: '0px 2px 5px 0 #e5e5e8',
        border: `solid 1px ${theme.palette.grey[300]}`,
        padding: theme.spacing(1, 3)
    }
})
)

const Slider = () => {
    const classes = useStyles()
    const { menuDispatch } = useContext(menuStore);
    const [isNewSlider, setIsNewSlider] = useState(false);
    const [sliders, setSliders] = useState([]);


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
            setSliders(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box display='flex' justifyContent='center' >
            <Box className={classes.root}>
                <Paper elevation={2} className={classes.balance}>
                    <Box display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                        <Box>
                            <Typography variant='h6'>تنظیمات اسلایدر</Typography>
                            <Typography variant='body1' color='textSecondary'>در این بخش می‌توانید اسلایدرهای سایت را مدیریت کنید.</Typography>
                        </Box>

                        <Button
                            startIcon={isNewSlider ? <ClearAllOutlined color='primary' fontSize='small' /> : <AddCircle color='primary' fontSize='small' />}
                            onClick={toggleSlider}
                            className={classes.addBtn}
                            color='primary'
                        >
                            <Typography variant='body1' component='p' color='secondary'>{isNewSlider ? 'لیست اسلایدر' : 'افزودن اسلایدر'}</Typography>
                        </Button>
                    </Box>
                    <Divider />

                    {isNewSlider ? <AddSlider /> : <SliderList data={sliders} />}



                </Paper>
            </Box>
        </Box>
    )
}

export default Slider
