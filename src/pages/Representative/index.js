import { Box, createStyles, Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import { useContext, useEffect } from "react";
import { MenuEnum, menuStore } from "../../states/MenuStateProvider";
import TableList from "./TableList";

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
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0)
        }
    },
}))

const Representative = () => {
    const classes = useStyles();
    const { menuDispatch } = useContext(menuStore);

    useEffect(() => {
        menuDispatch && menuDispatch({ type: 'ChangeActiveMenu', newMenu: MenuEnum.Representative });
    }, [menuDispatch])

    return (
        <Box display='flex' justifyContent='center' >
            <Box className={classes.root}>
                <Paper elevation={2} className={classes.balance}>
                    <Box display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                        <Box>
                            <Typography variant='h6'>امور نمایندگان</Typography>
                            <Typography variant='body1' color='textSecondary'>در این بخش می‌توانید اسلایدرهای سایت را مدیریت کنید.</Typography>
                        </Box>

                        {/* <Button
                            startIcon={isNewSlider ? <ClearAllOutlined color='primary' fontSize='small' /> : <AddCircle color='primary' fontSize='small' />}
                            onClick={toggleSlider}
                            className={classes.addBtn}
                            color='primary'
                        >
                            <Typography variant='body1' component='p' color='secondary'>{isNewSlider ? 'لیست اسلایدر' : 'افزودن اسلایدر'}</Typography>
                        </Button> */}
                    </Box>
                    <Divider />
                    <Box mt={2}>
                        <TableList isFetched={true} />
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default Representative
