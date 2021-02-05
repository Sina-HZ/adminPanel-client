import { Box, Button, InputAdornment, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import TableHeadWidget from "../../components/TableHead";

const HeadCell = [
    { id: 'num', label: '#' },
    { id: 'companyName', label: 'نام شرکت' },
    { id: 'manager', label: 'مدیر عامل' },
    { id: 'province', label: 'استان' },
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


const TableList = ({ isFetched }) => {

    return (
        <>
            <Box textAlign='right' my={2} >
                <TextField
                    label='جست‌و‌جو'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <Search color='disabled' />
                        </InputAdornment>,
                    }}
                />
            </Box>
            <TableContainer >
                <Table>
                    <TableHeadWidget headCells={HeadCell} />
                    <TableBody>
                        {isFetched ? fakeData.map((item, index) => (
                            <TableRow key={index} style={{ borderBottom: '2px solid', borderBottomColor: '#eee' }}>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500 }}>
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500 }}>
                                        {item.companyName}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500 }}>
                                        {item.manager}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='textSecondary' style={{ fontWeight: 500, direction: 'ltr' }}>
                                        {item.province}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='body1' color='secondary' style={{ fontWeight: 500 }}>
                                        {item.tel}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Button variant='outlined' color='primary'>
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