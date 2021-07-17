import React from 'react';
import { TableHead, TableRow, TableCell, makeStyles, createStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#fbfbfb'
    },
    cell: {
      color: theme.palette.text.secondary
    }
  }),
);



const TableHeadWidget = (props) => {
  const classes = useStyles()
  const {className, size, headCells = [] } = props;

  return (
    <TableHead
      className={className || classes.root}
    >
      <TableRow
      >
        {headCells.map(headCell => (
          <TableCell
            className={classes.cell}
            key={headCell.id}
            size={size || 'medium'}
          >
            {headCell.label}
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeadWidget;
