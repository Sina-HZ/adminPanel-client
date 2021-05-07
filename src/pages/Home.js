import React, { useContext, useEffect } from "react";
import { Box, createStyles, Grid, makeStyles, Paper, Typography, useTheme } from "@material-ui/core"
import { MenuEnum, menuStore } from "../states/MenuStateProvider";
import { observer } from "mobx-react-lite";
import Account from "../states/Account";
import { toJS } from "mobx";
import DataBox from "../components/DataBox";
import { EmailRounded, FingerprintRounded, FolderSharedRounded, LayersClearRounded, LayersRounded, WifiTetheringRounded } from "@material-ui/icons";
import SalesChart from "../components/SalesChart";
import CircleSaleSate from "../components/CircleSaleSate";
import MainContentPaper from "../components/MainContentPaper";

// import ApiRoutes from "../utils/apiRoutes";

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        marginTop: theme.spacing(-20),
        width: 1126,
        // background: theme.palette.primary.main,
        justifyContent: 'center',
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
        // height: 800,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0)
        }
    },
    chartItem: {

    },
    salesStats: {
        marginTop: theme.spacing(5)
    },
    notifMain: {
        backgroundColor: '#fff',
        margin: theme.spacing(1, 0),
        padding: theme.spacing(1, 2)
    },
    notifGrid: {
        backgroundColor: 'inherit',
        margin: theme.spacing(2.5, 0, 0)
    },
    notifItem: {
        borderBottom: '1px solid',
        borderBottomColor: theme.palette.grey[300],
        marginBottom: theme.spacing(1.5)
    }
})
)

const FakeData = [
    {
        number: '539.8k',
        title: 'مشتری فعال',
        id: 'customer'
    },
    {
        number: '1.42k',
        title: 'تکمیل مدارک',
        id: 'kyc'
    },
    {
        number: '176',
        title: 'نماینده فروش',
        id: 'reseller'
    },
    {
        number: '3.56k',
        title: 'تیکت باز',
        id: 'tickets'
    }
]

const SimpleNotif = [
    {
        title: 'جلسه بررسی تارگت فروش بهار',
        desc: 'کلیه همکاران فروش ساعت ۱۶ در سالن اصلی کنفرانس حضور داشته باشید. این جلسه اهمیت بالایی در شناسایی مشکلات فروش و اصلاح فرآیندهای داخلی دارد.'
    },
    {
        title: 'جلسه بررسی تارگت فروش بهار',
        desc: 'کلیه همکاران فروش ساعت ۱۶ در سالن اصلی کنفرانس حضور داشته باشید. این جلسه اهمیت بالایی در شناسایی مشکلات فروش و اصلاح فرآیندهای داخلی دارد.'
    },
    {
        title: 'جلسه بررسی تارگت فروش بهار',
        desc: 'کلیه همکاران فروش ساعت ۱۶ در سالن اصلی کنفرانس حضور داشته باشید. این جلسه اهمیت بالایی در شناسایی مشکلات فروش و اصلاح فرآیندهای داخلی دارد.'
    },
    {
        title: 'جلسه بررسی تارگت فروش بهار',
        desc: 'کلیه همکاران فروش ساعت ۱۶ در سالن اصلی کنفرانس حضور داشته باشید. این جلسه اهمیت بالایی در شناسایی مشکلات فروش و اصلاح فرآیندهای داخلی دارد.'
    },
    // {
    //     title: 'جلسه بررسی تارگت فروش بهار',
    //     desc: 'کلیه همکاران فروش ساعت ۱۶ در سالن اصلی کنفرانس حضور داشته باشید. این جلسه اهمیت بالایی در شناسایی مشکلات فروش و اصلاح فرآیندهای داخلی دارد.'
    // }
]


const Home = observer(() => {
    const classes = useStyles();
    const theme = useTheme();
    const ItemSetting = {
        customer: {
            color: '#0bff9b',
            icon() {
                return <WifiTetheringRounded />
            },
        },
        kyc: {
            color: '#73fff8',
            icon() {
                return <FingerprintRounded />
            }
        },
        reseller: {
            color: '#fffa6b',
            icon() {
                return <LayersRounded />
            }
        },
        tickets: {
            color: '#61c7ff',
            icon() {
                return <EmailRounded />
            }
        },
    }

    const { menuDispatch } = useContext(menuStore);

    useEffect(() => {
        menuDispatch && menuDispatch({ type: 'ChangeActiveMenu', newMenu: MenuEnum.Home });
    }, [menuDispatch])

    return (
        <MainContentPaper>
            <Grid
                container
                spacing={2}
            >
                {FakeData.map((item, index) => (
                    <Grid
                        item
                        md={3}
                        xs={6}
                        key={item.title}
                    >
                        <DataBox
                            color={ItemSetting[item.id].color}
                            icon={ItemSetting[item.id].icon()}
                            number={item.number}
                            subtitle={item.title}
                        />
                    </Grid>
                ))}
            </Grid>

            <Grid
                container
                spacing={2}
                className={classes.salesStats}
            >
                <Grid
                    item
                    lg={6}
                    xs={12}
                >

                    <SalesChart />

                </Grid>
                <Grid
                    item
                    lg={6}
                    xs={12}
                >
                    <CircleSaleSate />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <Paper elevation={0} className={classes.notifGrid}>
                        <Typography variant='body1' style={{ fontWeight: 700 }} >پیام‌های داخلی</Typography>
                        <Paper elevation={0} className={classes.notifMain}>
                            {SimpleNotif.map((item, index) => (
                                <Box key={index} className={classes.notifItem}>
                                    <Typography variant='body1' style={{ fontWeight: 500 }}>{item.title}</Typography>
                                    <Typography variant='caption' >{item.desc.slice(0, 150) + '...'}</Typography>
                                </Box>
                            ))}
                        </Paper>
                    </Paper>
                </Grid>
            </Grid>

        </MainContentPaper>
    )
})

export default Home;

