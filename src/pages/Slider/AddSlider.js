import { Box, FormControlLabel, makeStyles, Switch, TextField, Typography } from '@material-ui/core'
import { PanoramaOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { FileAttachTextField } from '../../components/CustomElements';

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing(3)
    },
    imageHolder: {
        width: '100%',
        backgroundColor: theme.palette.grey[300],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden'
    },
    listWrap: {
        marginBottom: theme.spacing(3)
    }
}))

const recomendedSize = '1920x940';
const AddSlider = () => {
    const classes = useStyle();
    const [attach, setAttach] = useState(null);
    const [imageSrc, setImageSrc] = useState('');
    const [isActive, changeActive] = useState(false);
    const [fileInputError, setFileInputError] = useState({
        type: {
            hasError: false,
            text: 'فایل باید از نوع ( png, jpeg, jpg ) باشد.'
        },
        size: {
            hasError: false,
            text: 'فایل نباید از ۲ مگابایت بیشتر شود'
        }
    })


    const fileChangeHandler = async (file) => {

        const checkType = file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'application/x-zip-compressed';
        const checkSize = file.size / 1000000 < 2;

        if (checkType && checkSize) {
            // try {
            //     const formData = new FormData();
            //     formData.append('file', file);
            //     const resultFile = await fileApi.sendFile(formData);
            //     setAttachment(resultFile.data);
            // } catch (error) {
            //     console.log('fileError: ', error.response.data)
            // }
            setAttach(file);
            setImageSrc(file);
        } else {
            if (checkSize && !checkType) {
                setFileInputError((prev) => ({ ...prev, type: { ...prev.type, hasError: true } }))
            }
            if ((!checkSize && checkType) || (!checkSize && !checkType)) {
                setFileInputError((prev) => ({ ...prev, size: { ...prev.size, hasError: true } }))
            }
        }
    }

    const attachNameChanger = (e) => {
        if (attach) {
            setAttach(prev => ({ ...prev, name: e.target.value }))
        }
    }

    const toggleChecked = () => {
        changeActive(prev => !prev)
    }

    return (
        <Box className={classes.root}>
            <Box>
                <Typography variant='body1'>عکس مورد نظر را انتخاب نمایید. دقث داشته باشید که: </Typography>
                <ul className={classes.listWrap}>
                    <li>
                        <Typography variant='body2'>حجم عکس از ۲ مگابایت بیشتر نباشد.</Typography>
                    </li>
                    <li>
                        <Typography variant='body2'>فرمت عکس jpeg,jpg,png باشد</Typography>
                    </li>
                </ul>
                <FileAttachTextField
                    inputOnChange={(e) => fileChangeHandler(e.target.files[0])}
                    accept='.png, .jpeg, .jpg,'
                    error={fileInputError.size.hasError || fileInputError.type.hasError}
                    helperText={(fileInputError.type.hasError && fileInputError.type.text) || (fileInputError.size.hasError && fileInputError.size.text)}
                    value={attach ? attach.name : ''}
                    onChange={(e) => attachNameChanger(e)}
                />
                <Box mt={2}>
                    <Typography variant='body1'>وضعیت</Typography>
                    <Typography variant='body2' color='textSecondary' gutterBottom>با تغییر وضعیت فعال یا غیر فعال بودن حالت نمایش اسلایدر را انتخاب می کنید.</Typography>
                    <FormControlLabel
                        control={<Switch checked={isActive} onChange={toggleChecked} />}
                        label={<Typography style={{ width: 90 }}>{isActive ? 'فعال' : 'غیرفعال'}</Typography>}
                        labelPlacement='start'
                    />
                </Box>
            </Box>
            <Box width={0.6} textAlign='center'>
                <Box className={classes.imageHolder}>
                    {
                        imageSrc
                            ? <img src={URL.createObjectURL(imageSrc)} width='100%' />
                            : <PanoramaOutlined color='disabled' style={{ fontSize: 90 }} />
                    }

                </Box>
                <Box mt={1}>
                    <Typography variant='body2' color='textSecondary' style={{fontStyle: 'italic'}}>‍‍‍{`اندازه پیشنهادی برای اسلایدر ${recomendedSize} پیکسل می‌باشد.`}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default AddSlider
