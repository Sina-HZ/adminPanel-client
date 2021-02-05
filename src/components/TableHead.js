import React from 'react';
import { TableHead, TableRow, TableCell, makeStyles, createStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#f8f9fa'
    },
    cell: {
      color: theme.palette.text.secondary
    }
  }),
);



const TableHeadWidget = (props) => {
  const classes = useStyles()
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, className, size, headCells = [] } = props;
  // const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
  //   onRequestSort(event, property);
  // };

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
          // sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
            {/* <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TableHeadWidget;
