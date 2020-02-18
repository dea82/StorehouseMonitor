import React from "react";
import StorehouseApi from "../Hooks/StorehouseApi";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const tableStyle = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function SensorList() {
  const { data, isLoading, isError } = StorehouseApi("/nodes", {});
  const style = tableStyle;
  if (isLoading)
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  if (isError) return <h1>Error</h1>;
  return (
    <TableContainer component={Paper}>
      <Table className={style.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Device Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
