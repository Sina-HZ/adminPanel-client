import { Box, Button, makeStyles, Paper, TextField, Typography } from "@material-ui/core"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authApi } from "../services/api";
import ApiRoutes from "../utils/apiRoutes";
import { setUserAuthorization } from "../utils/axios";


const useStyle = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        minWidth: 500,
        minHeight: 400,
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    forminput: {
        marginBottom: theme.spacing(2)
    },
    submitBtn: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1)
    }
}))

const Register = () => {
    const classes = useStyle();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const history = useHistory()

    const changeHandler = (state, value) => {
        setFormData(prev => ({ ...prev, [state]: value }))
    }

    const submitHandler = async (e) => {
        try {
            const result = await authApi.login(formData.email, formData.password);
            if(result.data.user.token){
                const setAuth = await setUserAuthorization(result.data.user.token);
                history.push('/');
                
            }
            console.log('result: ', result.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Box className={classes.formBox}>
                    <TextField
                        fullWidth
                        label='ایمیل'
                        variant='outlined'
                        type='email'
                        value={formData.email}
                        onChange={e => changeHandler('email', e.target.value)}
                        className={classes.forminput}
                    />
                    <TextField
                        fullWidth
                        label='کلمه عبور'
                        variant='outlined'
                        type='password'
                        value={formData.password}
                        onChange={e => changeHandler('password', e.target.value)}
                        className={classes.forminput}
                    />
                </Box>
                <Button fullWidth className={classes.submitBtn} color='primary' variant='contained' onClick={submitHandler}>
                    <Typography>ورود</Typography>
                </Button>
            </Paper>
        </Box>
    )
}

export default Register;
