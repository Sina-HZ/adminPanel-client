import { Box, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
    main: ({color}) => ({
        padding: theme.spacing(3, 2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        color: 'inherit'
    }),
    iconMain: ({color}) => ({
        backgroundColor: color || '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(1),
        borderRadius: theme.spacing(5),
    })
}))

const DataBox = ({ number, subtitle, icon, className, color, ...props }) => {
    const classes = useStyles({ color });

    return (
        <Paper elevation={0} className={clsx(classes.main, className)} {...props}>
            <Box>
                <Typography variant='h5' style={{fontWeight: 700}}>{number}</Typography>
                <Typography variant='body2'>{subtitle}</Typography>
            </Box>
            <Box className={classes.iconMain}>
                {icon}
            </Box>
        </Paper>
    )
}

export default DataBox
