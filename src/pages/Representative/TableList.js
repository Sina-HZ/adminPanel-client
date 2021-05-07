import React, { useEffect, useState } from "react";
import { Box, Button, InputAdornment, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import TableHeadWidget from "../../components/TableHead";
import { resellerApi } from "../../services/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    nakedSelect: {
        borderStyle: 'none',
    },
    inputRoot: {
        backgroundColor: '#fff',
    },
}))

const HeadCell = [
    { id: 'num', label: '#' },
    { id: 'companyName', label: 'نام شرکت' },
    { id: 'province', label: 'استان' },
    { id: 'city', label: 'شهر' },
    { id: 'tel', label: 'تلفن' },
    { id: 'action', label: 'فعالیت' },
];

const generateData = (id, companyName, manager, province, tel) => (
    { id, companyName, manager, province, tel }
);

const fakeData = [
    generateData('1', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('2', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('3', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('4', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('5', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('6', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('7', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('8', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('9', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
    generateData('10', 'پدیده نوین جنوب فارس', 'حسین نعمتی', 'فارس', '07136674265'),
];


const TableList = () => {
    const classes = useStyles();
    const [list, setList] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getList()
        // return () => {
        //     cleanup
        // }
    }, [])

    const getList = async () => {
        try {
            const fetch = await resellerApi.list();
            setList(fetch.data);
            setIsFetched(true);
        } catch (error) {
            console.log('reseller Fetch: ', error)
        }
    }

    const showDetail = (id) => {
        history.push(`${history.location.pathname}/${id}`)
    }

    return (
        <>
            <Box textAlign='right' my={2} >
                <TextField
                    label='جست‌و‌جو'
                    variant='outlined'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <Search color='disabled' />
                        </InputAdornment>,
                        classes: { root: classes.inputRoot, notchedOutline: classes.nakedSelect}
                    }}
                    size='small'
                />
            </Box>
            <TableContainer >
                <Table>
                    <TableHeadWidget headCells={HeadCell} />
                    <TableBody style={{backgroundColor: '#fff'}}>
                        {isFetched ? list.map((item, index) => (
                            <TableRow key={item.id} style={{ borderBottom: '2px solid', borderBottomColor: '#eee' }}>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500 }}>
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500 }}>
                                        {item.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500 }}>
                                        {item.province}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500, direction: 'ltr' }}>
                                        {item.city}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {item.phone.map(phone => (
                                        <Typography variant='body1' color='secondary' style={{ fontWeight: 500 }} key={phone}>
                                            {phone}
                                        </Typography>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    <Button variant='outlined' color='primary' onClick={() => showDetail(item.id)}>
                                        <Typography variant='body1' color='secondary' style={{ fontWeight: 500 }}>جزییات</Typography>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                            : <SkeltonList row={9} />
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

const SkeltonList = ({ row }) => {

    let rowArray = [];
    for (let i = 1; i <= row; i++) {
        rowArray.push(i)
    }

    return (
        <>
            {rowArray.map((item, index) => (
                <TableRow key={index} style={{ borderBottom: '2px solid', borderBottomColor: '#eee' }}>
                    <TableCell colSpan={7}>
                        <Skeleton variant='text' width='100%' height={40} />
                    </TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default TableList;