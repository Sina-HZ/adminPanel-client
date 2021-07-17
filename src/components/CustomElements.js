import React from 'react';
import { Button, InputAdornment, makeStyles, TextField, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    inputAttachBtn: {
        backgroundColor: theme.palette.grey[300],
        borderRadius: 5,
        padding: theme.spacing(.5, 2)
    },
}))

export const FileAttachTextField = ({ accept, inputOnChange, InputProps, ...props }) => {
    const theme = useTheme();
    const classes = useStyles()
    return (
        <>
            <input
                accept={accept || "image/*"}
                style={{ display: 'none' }}
                id="upload-ticket-attach"
                type="file"
                onChange={inputOnChange}
            />

            <TextField
                placeholder='نام فایل'
                variant='outlined'
                color='secondary'
                size='small'
                fullWidth
                InputProps={{
                    endAdornment: <InputAdornment position='end'>
                        <label htmlFor='upload-ticket-attach'>
                            <Button component="span" className={classes.inputAttachBtn}>
                                <Typography color='textSecondary'>پیوست فایل</Typography>
                            </Button>
                        </label>
                    </InputAdornment>,
                    style: { padding: theme.spacing(0, 0.7) },
                    ...InputProps
                }}
                {...props}
            />
        </>
    )
}

