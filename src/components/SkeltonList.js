import React from 'react'
import { TableRow, TableCell } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

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

export default SkeltonList