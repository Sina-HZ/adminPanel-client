import { Avatar, Box, Grid, makeStyles, Paper, TextField, useMediaQuery } from '@material-ui/core'
import React from 'react'
import { FileAttachTextField } from '../../components/CustomElements';
import useFileInput from '../../hooks/useFileInput';
import useUploader from '../../hooks/useUploader';

const useStyles = makeStyles(theme => ({
    main: {
        padding: theme.spacing(2),
        margin: theme.spacing(1, 3, 3),
        backgroundColor: 'inherit',
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    textInput: {
        backgroundColor: theme.palette.grey[100],
        borderRadius: 8
    },
    formMain: {
        width: '45%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    imageMian: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },
    nakedSelect: {
        borderStyle: 'none',
    },
    inputRoot: {
        backgroundColor: '#fff',
    },
}))

const ProfileSetting = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const classes = useStyles();
    const { file, setFile, options } = useUploader()
    const [inputError, setInputError] = useFileInput();

    const fileChangeHandler = async (file) => {

        const checkType = file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg';
        const checkSize = file.size / 1000000 < 2;

        if (checkType && checkSize) {
            setFile(file)
        } else {
            if (checkSize && !checkType) {
                setInputError((prev) => ({ ...prev, type: { ...prev.type, hasError: true } }))
            }
            if ((!checkSize && checkType) || (!checkSize && !checkType)) {
                setInputError((prev) => ({ ...prev, size: { ...prev.size, hasError: true } }))
            }
        }
    }

    return (
        <Paper elevation={0} className={classes.main}>
            <Grid
                container
                spacing={3}

            >
                <Grid
                    container
                    item
                    spacing={3}
                    lg={6}
                    xs={12}
                >
                    <Grid
                        item
                        xs={12}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Avatar src={options.fileSrc} className={classes.avatar} alt="profile picture" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <FileAttachTextField
                            inputOnChange={(e) => fileChangeHandler(e.target.files[0])}
                            accept='.png, .jpeg, .jpg,'
                            error={inputError.size.hasError || inputError.type.hasError}
                            helperText={(inputError.type.hasError && inputError.type.text) || (inputError.size.hasError && inputError.size.text)}
                            value={file ? file.name : ''}
                            className={classes.textInput}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}

                        />
                    </Grid>
                    <Grid
                        item
                        md={5}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            size='small'
                            label='نام'
                            variant='outlined'
                            color='secondary'
                            className={classes.textInput}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}

                        />
                    </Grid>
                    <Grid
                        item
                        md={7}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            size='small'
                            label='نام خانوادگی'
                            variant='outlined'
                            color='secondary'
                            className={classes.textInput}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}

                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            size='small'
                            label='شماره موبایل'
                            variant='outlined'
                            color='secondary'
                            className={classes.textInput}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}

                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            size='small'
                            label='ایمیل'
                            variant='outlined'
                            color='secondary'
                            className={classes.textInput}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}

                        />
                    </Grid>
                </Grid>

                {!isMobile && <Grid
                    item
                    lg={6}
                    xs={12}
                >
                    <Box className={classes.imageMian}>
                        <img src='/assets/images/profileSetting.svg' width='80%' alt='profile setting' />
                    </Box>
                </Grid>}
            </Grid>


        </Paper>
    )
}

export default ProfileSetting
