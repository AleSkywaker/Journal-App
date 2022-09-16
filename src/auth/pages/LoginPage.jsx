import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout';
import { checkingAuthentication, startGoogleSigIn } from '../../store/auth';
import { useForm } from '../../hooks';
import { useMemo } from 'react';

export const LoginPage = () => {

const { status } = useSelector( state => state.auth);
const dispatch =   useDispatch();

 const {email, password, onInputChange } = useForm({
  email:'alex@email.com',
  password: '123456'
 })

 const isAuthenticating = useMemo(() => status === 'checking', [status]);

 const handleSubmit = e => {
  e.preventDefault();
   console.log({email, password});
   dispatch(checkingAuthentication());
 }

 const handleGoogleSignIn = () => {
  console.log('google');
  dispatch(startGoogleSigIn());
 }


  return (
    <AuthLayout title='Login'>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='password'
              type='password'
              placeholder='Password'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' type='submit' fullWidth disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth
                onClick={handleGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
