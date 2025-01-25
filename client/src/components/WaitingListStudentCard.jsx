import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Button, TableCell, TableRow, Typography } from '@mui/material';
import { getStudentById } from '../functions/students';

function WaitingListStudentCard({ student, index, userId, setSelectedStudent, setShowRemoveFromWaitingListModal }) {
  const { studentId, createdAt } = student;
  const [studentData, setStudentData] = useState();

  useEffect(() => {
    const getStudentData = async () => {
      const studentData = await getStudentById(studentId);
      setStudentData(studentData);
    };
    getStudentData();
  }, [student]);

  console.log(format(createdAt, 'dd-MMMM-yyyy - hh:mm-aaa'));

  

  return (
    <TableRow>
      <TableCell>
        <Typography> {index + 1} </Typography>
      </TableCell>
      <TableCell>
        <Typography> {studentData?.name}</Typography>
      </TableCell>
      <TableCell align='right'>
        <Typography> {format(createdAt, 'd/MM/yyyy - HH:mm')}</Typography>
      </TableCell>
      <TableCell align='right' sx={{ minWidth: '170px' }}>
        {studentData?.user === userId ? (
          <Button
            sx={{ padding: 0 }}
            onClick={() => {
              setSelectedStudent(studentData);
              setShowRemoveFromWaitingListModal(true);
            }}
          >
            Retirar de la lista
          </Button>
        ) : (
          <Typography>------------</Typography>
        )}
      </TableCell>
    </TableRow>
  );
}

export default WaitingListStudentCard;
