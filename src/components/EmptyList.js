import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    img: {
        maxWidth: 200,
        margin: theme.spacing(3,0)
    }
}))

const EmptyList = () => {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
            <img src={'/assets/images/emptyList.svg'} alt='no data' className={classes.img} />
            <Typography variant='body2' color='textSecondary'>موردی برای نمایش وجود ندارد</Typography>
        </Box>
    )
}

export default EmptyList
