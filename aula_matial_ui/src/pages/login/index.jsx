import React, { useState } from 'react'
import { FormControl, Input, FormHelperText, Grid, InputLabel, Card, CardHeader, CardContent } from '@mui/material';


export default function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  return (
    <Grid container spacing={2}>
    <Card sx={style}>
      <CardHeader
        title="Login"
        subheader="Página de Login"
      /> 
      <CardContent sx={{
        width: '95%',
        maxWidth: '100%',
      }}>
    <Grid item xs={12}>
    <FormControl fullWidth>
      <InputLabel htmlFor='login_titulo'>Usuário</InputLabel>
      <Input id="login_titulo" aria-describedby="login_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
      <FormHelperText id="login_helper_text">Digite seu usuário.</FormHelperText>
    </FormControl>
  </Grid>
    <Grid item xs={12}>
    <FormControl fullWidth>
      <InputLabel htmlFor='password_titulo'>Password</InputLabel>
      <Input id="password_titulo" aria-describedby="password_helper_text" value={password} onChange={e => { setPassword(e.target.value) }} />
      <FormHelperText id="password_helper_text">Digite sua senha.</FormHelperText>
    </FormControl>
  </Grid>
  </CardContent>
  </Card>
  </Grid>
  
  )
  
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  p: 4,
};
