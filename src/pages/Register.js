import { Box, Button, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authApi } from "../services/api";
import ApiRoutes from "../utils/apiRoutes";
import { setUserAuthorization } from "../utils/axios";


const useStyle = makeStyles(theme => ({
    root: {
        height: '100vh',
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
    formMain: {
        width: '70%',
        margin: theme.spacing(0, 'auto'),
        [theme.breakpoints.down('md')]: {
            width: '80%',
        }
    },
    forminput: {
        marginBottom: theme.spacing(3)
    },
    submitBtn: {
        padding: theme.spacing(1),
        boxShadow: 'unset',
        color: '#fff',
        borderRadius: theme.spacing(0.5),
        '&:hover': {
            boxShadow: 'unset',
        }
    },
    imageHolder: {
        backgroundColor: theme.palette.error.light,
        height: '100%'
    },
    formCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: theme.spacing(8, 10),
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(8, 2),
        }
    },
    imageCol: {
        maxHeight: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '0% 50%',
        transform: 'scaleX(-1)',
        [theme.breakpoints.down('md')]: {
            objectPosition: '30% 50%',
        }
    },
    copyright: {
        display: 'flex',
        justifyContent: 'center'
    },
    logoMain: {
        display: 'flex',
        justifyContent: 'center'
    },
    logoType: {
        fontWeight: 800,
        fontSize: theme.typography.pxToRem(30),
        letterSpacing: 4,
    },
    copyrightLink: {
        textDecoration: 'none',
        fontWeight: 500,
        fontSize:  theme.typography.pxToRem(16),
        color: theme.palette.primary.main,
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
            if (result.data.user.token) {
                const setAuth = await setUserAuthorization(result.data.user.token);
                history.push('/');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid
            container
            className={classes.root}
        >
            <Grid
                item
                lg={5}
                md={5}
                xs={12}
                className={classes.formCol}
            >

                <Box className={classes.logoMain}>
                    <Typography variant='body1' color='primary' className={classes.logoType}>NETWORK SOLUTION</Typography>
                </Box>
                <Box className={classes.formMain}>
                    <Box className={classes.formBox}>
                        <TextField
                            fullWidth
                            label='ایمیل'
                            variant='outlined'
                            type='email'
                            value={formData.email}
                            onChange={e => changeHandler('email', e.target.value)}
                            className={classes.forminput}
                            size='small'
                        />
                        <TextField
                            fullWidth
                            label='کلمه عبور'
                            variant='outlined'
                            type='password'
                            value={formData.password}
                            onChange={e => changeHandler('password', e.target.value)}
                            className={classes.forminput}
                            size='small'
                        />
                    </Box>
                    <Button fullWidth className={classes.submitBtn} color='primary' variant='contained' onClick={submitHandler}>
                        <Typography>ورود</Typography>
                    </Button>
                </Box>
                <Box className={classes.copyright}>
                    <Typography variant='body1'>Developed by <a className={classes.copyrightLink} href='https://www.linkedin.com/in/sina-hosseinzadeh/' target='_blank' rel='noopener noreferrer'>Sina Hoseinzadeh</a></Typography>
                </Box>
            </Grid>
            <Grid
                item
                lg={7}
                md={7}
                xs={12}
                className={classes.imageCol}
            >
                <Box className={classes.imageHolder}>
                    <img src={'/assets/images/tower2.jpg'} className={classes.image} alt='radio tower bg' />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register;
