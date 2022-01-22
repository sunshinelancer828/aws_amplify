import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Paper} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';

function createData(id, taskname, taskdate, completetasknumber, totaltasknumber) {
  return { id, taskname, taskdate, completetasknumber, totaltasknumber};
}

const rows = [
  createData(1,'Task One', '10 Oct, 2021', 1, 5),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'taskname',
    label: 'Task',
    right: false,
  },
  {
    id: 'taskdate',
    label: 'Due Date',
    right: true,
  },
  {
    id: 'taskstate',
    label: 'Mark as complete',
    right: true,
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{width:'20px'}}></TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} width={headCell.right ? '200px' : 'auto'} align={headCell.right? 'center':'left'} 
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)} sx={{fontSize: '18px', fontWeight: 'bold', color: '#676767'}}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TaskList() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy}
              onRequestSort={handleRequestSort} rowCount={rows.length}/>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow key={index}>
                      <TableCell component="th" id={labelId} scope="row" sx={{width: '20px', fontWeight:'bold', color: '#7b7b7b'}}>
                        {row.id}
                      </TableCell>
                      <TableCell align="left" sx={{color: '#808080'}}>{row.taskname}</TableCell>
                      <TableCell align="center" sx={{width:'200px', color: '#808080'}}>{row.taskdate}</TableCell>
                      <TableCell align="center" sx={{width: '200px', display: 'flex', alignItems: 'end', 
                        fontStyle: 'italic', color: '#808080'}}>
                        <CheckIcon sx={{width:'30px', height: '20px', color: '#7e7eff'}}/>
                        <GroupsIcon sx={{width:'30px', height: '20px', color: '#b3b3b3'}}/>
                        {row.completetasknumber}/{row.totaltasknumber} Completed
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height:  53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} 
          page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}/>
      </Paper>
    </Box>
  );
}
