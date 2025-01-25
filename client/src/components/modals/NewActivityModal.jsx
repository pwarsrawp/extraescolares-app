import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material';
import { ButtonContained, ButtonOutlined } from '../Templates';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: '95%',
  backgroundColor: '#FFFFFF',
  boxShadow: 24,
  padding: '4rem',
};

const NewActivityModal = ({ modalState, handleModal, onCreateActivity }) => {
  const [activityData, setActivityData] = useState({});
  const handleInput = (key, value) => setActivityData({ ...activityData, [key]: value });

  return (
    <Modal open={modalState} onClose={() => handleModal(false)}>
      <Stack style={style} spacing={1}>
        <Typography variant='body1' fontWeight={600} pb={2}>
          Nueva actividad
        </Typography>
        <Stack spacing={2}>
          <TextField id='name' required label='Nombre de la actividad' value={activityData?.name} helperText='Ejemplo: Predeporte' onChange={(e) => handleInput('name', e.target.value)} />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Ciclo</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={activityData?.cicle}
              label='Ciclo'
              helperText='Opciones: Infantil o Primaria'
              onChange={(e) => handleInput('cicle', e.target.value)}
            >
              <MenuItem value={'Infantil'}>Infantil</MenuItem>
              <MenuItem value={'Primaria'}>Primaria</MenuItem>
            </Select>
          </FormControl>
          <TextField id='level' required label='Nivel' helperText='Ejemplo: 1º - 6º primaria' value={activityData?.level} onChange={(e) => handleInput('level', e.target.value)} />
          <TextField id='numberDays' required label='Nº días por semana' value={activityData?.numberDays} helperText='Ejemplo: 2' onChange={(e) => handleInput('numberDays', e.target.value)} />
          <TextField id='daysWeek' required label='Dias de la semana' value={activityData?.daysWeek} helperText='Ejemplo: L y X' onChange={(e) => handleInput('daysWeek', e.target.value)} />
          <TextField id='schedule' required label='Horario' value={activityData?.schedule} helperText='Ejemplo: 16:00 - 17:00' onChange={(e) => handleInput('schedule', e.target.value)} />
          <TextField id='memberPrice' required label='Precio socios' value={activityData?.memberPrice} helperText='Ejemplo: 20' onChange={(e) => handleInput('memberPrice', e.target.value)} />
          <TextField id='noMemberPrice' required label='Precio no socios' value={activityData?.noMemberPrice} helperText='Ejemplo: 26' onChange={(e) => handleInput('noMemberPrice', e.target.value)} />
          <TextField id='company' required label='Empresa' value={activityData?.company} helperText='Ejemplo: Respira Ocio' onChange={(e) => handleInput('company', e.target.value)} />
          <TextField id='slots' required label='Nº total de plazas' value={activityData?.slots} helperText='Ejemplo: 15' onChange={(e) => handleInput('slots', e.target.value)} />
        </Stack>
        <Stack direction='row' justifyContent='center' spacing={2} pt={2}>
          <ButtonOutlined onClick={() => handleModal(false)}>Cancelar</ButtonOutlined>
          <ButtonContained onClick={() => onCreateActivity(activityData)}>Guardar</ButtonContained>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default NewActivityModal;
