import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Basictable(props) {

  return (
    <div className='container' >
      <div className="row justify-content-center text-center">
        <div className="col-lg-12 m-1"  >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>

                  <TableCell>No# Watts</TableCell>
                  {props.watts.map((i, index) => {
                    return <TableCell align="right" key={index}> {i} Watt </TableCell>
                  })}
                </TableRow>

              </TableHead>
              <TableBody>
                <TableRow>

                  <TableCell component="th" scope="row">Frequncy</TableCell>
                  {props.logArray.map((i, index) => {
                    return <TableCell align="right" key={index}> {i} </TableCell>
                  })}

                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
