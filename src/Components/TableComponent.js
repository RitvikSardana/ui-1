import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './Access.css'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(check, name, access, members, update,seen) {
  return { check, name, access, members, update,seen };
}
const rows = [
  createData(<RadioButtonUncheckedOutlinedIcon/>, 'Management Team','All Access',4, "1 min ago", <VisibilityOutlinedIcon/>),
  createData(<RadioButtonUncheckedOutlinedIcon/>, 'Procurement Team',"Restricted Access",8, "1 min ago", <VisibilityOutlinedIcon/>),
  createData(<RadioButtonUncheckedOutlinedIcon/>, 'Project Team', "Restricted Access",16, "1 min ago", <VisibilityOutlinedIcon/>),
  createData(<RadioButtonUncheckedOutlinedIcon/>, 'IT Team',"Restricted Access",4, "1 min ago", <VisibilityOutlinedIcon/>),
  createData( "", "Super Admin", "All Access",1, "1 min ago", <VisibilityOutlinedIcon/>),
];

function TableComponent() {
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{backgroundColor:"#f2f2f2"}}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Department/Role name</TableCell>
              <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">No. of members</TableCell>
              <TableCell align="center">Last updated</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.check}>
                <TableCell component="th" scope="row">
                  {row.check}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                {/* <TableCell className ={row.fat=="Access Granted" ? "Access__granted" :row.fat=="All Access"?"Access__granted": "Access__denied"} align="left">{row.fat}</TableCell> */}
                <TableCell 
                align="left" 
                className= {`${row.access}`}
                >
                    <h4>{row.access}</h4></TableCell>
                <TableCell align="center">{row.members}</TableCell>
                <TableCell align="center">{row.update}</TableCell>
                <TableCell align="center">{row.seen}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;
