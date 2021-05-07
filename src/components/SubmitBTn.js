import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({ 
    main: {
        boxShadow: 'none',
        color: '#fff',
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        '&:hover': {
            boxShadow: 'none'
        }
    }
}))

const SubmitBTn = ({children , ...props}) => {
    const classes = useStyles()

    return (
        <Button variant='contained' color='primary' className={classes.main} {...props}>
            {children}
        </Button>
    )
}

export default SubmitBTn
