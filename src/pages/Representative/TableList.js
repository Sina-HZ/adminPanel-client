import React, { useEffect, useState } from "react";
import { Box, Button, InputAdornment, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import TableHeadWidget from "../../components/TableHead";
import { resellerApi } from "../../services/api";
import { useHistory } from "react-router-dom";
import SkeltonList from "../../components/SkeltonList";

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


const TableList = () => {
    const classes = useStyles();
    const [list, setList] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getList()
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



export default TableList;