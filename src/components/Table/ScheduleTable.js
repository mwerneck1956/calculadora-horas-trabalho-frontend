import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TableBody,
} from "@material-ui/core";

export function ScheduleTable(props) {
  let data = props.data;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Data</TableCell>
            <TableCell align="center">Horario Entrada</TableCell>
            <TableCell align="center">Horario Saída</TableCell>
            <TableCell align="center">Horario Diurno</TableCell>
            <TableCell align="center">Horário Noturno</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow /*key={data.date}*/>
              <TableCell component="th" scope="row">
                {data.date}
              </TableCell>
              <TableCell align="center">{data.arrivalHour}</TableCell>
              <TableCell align="center">{data.departureHour}</TableCell>
              <TableCell align="center">{data.dayTimeHours}</TableCell>
              <TableCell align="center">{data.nightTimeHours}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
