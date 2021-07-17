import { Box, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, makeStyles, MenuItem, Select, TextField, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { Add, AddCircleRounded, AddRounded } from '@material-ui/icons'
import { observer } from 'mobx-react-lite'
import React, { useRef, useState } from 'react'
import useSnack from '../../hooks/useSnack'
import { resellerApi } from '../../services/api'
import { Ostan, Shahr } from '../../utils/generalConst'

const initialState = {
    name: '',
    province: undefined,
    city: '',
    address: '',
    phone: '',
    phoneList: []
}

const useStyle = makeStyles(theme => ({
    submit: {
        color: '#fff',
        boxShadow: 'unset',
        '&:hover': {
            boxShadow: 'unset'
        }
    },
    popoverPaper: {
        maxHeight: 200
    },
    addPhonBtn: {
        position: 'relative',
        right: -12
    },
    nakedSelect: {
        borderStyle: 'none',
    },
    inputRoot: {
        backgroundColor: '#fff',
    },
    imageMian: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    }
}))

const AddNew = observer(({toggleView}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const classes = useStyle();
    const { defaultSnack } = useSnack();
    const [formValue, setformValue] = useState(initialState);

    const ref = React.createRef();

    const formHandler = (state, value) => {
        setformValue(prev => ({ ...prev, [state]: value }))
    }

    const phoneHandler = (e) => {
        if (e.key === 'Enter' || e.type === 'click') {
            const phones = [...new Set([...formValue.phoneList, e.target.value])];
            setformValue(prev => ({ ...prev, phoneList: phones }))
            formHandler('phone', '')
        }
    }

    const submitHandler = async () => {
        try {
            const payload = {
                name: formValue.name,
                phone: formValue.phoneList,
                province: formValue.province.name,
                city: formValue.city,
                address: formValue.address,
            }
            const result = await resellerApi.add(payload);
            defaultSnack('درخواست شما با موفقیت ثبت شد.', 'success');
            toggleView()
        } catch (error) {
            defaultSnack('مشکلی پیش آمده است. دوباره سعی کنید.', 'error')

        }
    }

    return (
        <>
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
                    >
                        <TextField
                            fullWidth
                            label='نام نماینده (شرکت)'
                            size='small'
                            variant='outlined'
                            onChange={e => formHandler('name', e.target.value)}
                            value={formValue.name}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={6}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            label='استان'
                            size='small'
                            variant='outlined'
                            select
                            ref={ref}
                            SelectProps={{ MenuProps: { PopoverClasses: { paper: classes.popoverPaper } } }}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}
                            onChange={e => formHandler('province', Ostan.find(el => el.name === e.target.value))}
                            value={formValue.province?.name || ''}
                        >
                            {Ostan.map(item => (
                                <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid
                        item
                        sm={6}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            label='شهر'
                            size='small'
                            variant='outlined'
                            disabled={!formValue.province}
                            select
                            SelectProps={{ MenuProps: { PopoverClasses: { paper: classes.popoverPaper } } }}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}
                            onChange={e => formHandler('city', e.target.value)}
                            value={formValue.city}
                        >
                            {
                                formValue.province
                                    ? Shahr.filter(el => el.ostan === formValue.province?.id).map(item => (
                                        <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
                                    ))
                                    : <MenuItem value={''}></MenuItem>
                            }
                        </TextField>
                    </Grid>
                    <Grid
                        item
                        sm={6}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            label='تلفن'
                            size='small'
                            variant='outlined'
                            onChange={e => formHandler('phone', e.target.value.replace(/\D/, ''))}
                            onKeyDown={phoneHandler}
                            value={formValue.phone}
                            inputProps={{ maxLength: 11 }}
                            InputProps={{
                                endAdornment: <InputAdornment className={classes.addPhonBtn}>
                                    <IconButton style={{ padding: theme.spacing() }} disabled={formValue.phone.length < 8} onClick={() => phoneHandler({ type: 'click', target: { value: formValue.phone } })} >
                                        <AddRounded fontSize='small' />
                                    </IconButton>
                                </InputAdornment>,
                                classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect }
                            }}

                            helperText='حداکثر ۳ شماره تلفن می‌توانید ثبت کنید.'
                        />
                    </Grid>
                    <Grid
                        item
                        sm={6}
                        xs={12}
                    >
                        <Box display='flex' height={1} justifyContent='flex-end' py={2} flexWrap='wrap'>
                            {formValue.phoneList.map((item, index) => (
                                <React.Fragment key={item}>
                                    {index > 0 && <Typography variant='body2' color='textSecondary'>&nbsp; - &nbsp;</Typography>}
                                    <Typography variant='body2' color='textSecondary'>{item}</Typography>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            label='آدرس'
                            size='small'
                            variant='outlined'
                            multiline
                            rowsMax={3}
                            rows={3}
                            onChange={e => formHandler('address', e.target.value)}
                            InputProps={{ classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect } }}
                            value={formValue.address}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                    >
                        <Button variant='contained' color='primary' fullWidth className={classes.submit} onClick={submitHandler}>
                            <Typography variant='body1' style={{ fontWeight: 500 }}>ارسال</Typography>
                        </Button>
                    </Grid>

                </Grid>
                {!isMobile && <Grid
                    item
                    sm={6}
                    xs={12}
                >
                    <Box className={classes.imageMian}>
                        <img src={'/assets/images/resellerForm.svg'} width='80%' style={{ transform: 'scaleX(-1)' }} alt='reseller illustrate' />
                    </Box>
                </Grid>}
            </Grid>

        </>
    )
})

export default AddNew
