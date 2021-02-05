import { Box, createStyles, makeStyles, Paper, Typography } from "@material-ui/core"
import { useContext, useEffect } from "react";
import { MenuEnum, menuStore } from "../states/MenuStateProvider";
import ApiRoutes from "../utils/apiRoutes";

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
})
)


const Home = () => {
    const classes = useStyles()

    const { menuDispatch } = useContext(menuStore);
    
    useEffect(() => {
        menuDispatch && menuDispatch({ type: 'ChangeActiveMenu', newMenu: MenuEnum.Home });
    }, [menuDispatch])

    return (
        <Box display='flex' justifyContent='center' >
            <Box className={classes.root}>
                <Paper elevation={2} className={classes.balance}>
                </Paper>
            </Box>
        </Box>
    )
}

export default Home;

