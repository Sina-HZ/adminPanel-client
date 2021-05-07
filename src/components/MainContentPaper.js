import React from 'react';
import { Box, createStyles, makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';

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
            width: 966,
        },
        [theme.breakpoints.down('md')]: {
            width: 'calc(100% - 150px)',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2, 0),
            margin: theme.spacing(0, 1.5, 2),
        },
    },
    balance: {
        padding: theme.spacing(0),
        margin: theme.spacing(0, 1.5, 2),
        // height: 800,
        width: '100%',
        backgroundColor: 'inherit',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0)
        }
    },
})
)

const MainContentPaper = ({ className, children }) => {
    const classes = useStyles();

    return (
        <Box display='flex' justifyContent='center' >
            <Box className={classes.root}>
                <Paper elevation={0} className={clsx(classes.balance, className)}>
                    {children}
                </Paper>
            </Box>
        </Box>
    )
}

export default MainContentPaper
