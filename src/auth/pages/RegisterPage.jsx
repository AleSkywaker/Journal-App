import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [ (value)=>value.includes('@'), 'El correo dener un @'],
  password: [ (value)=>value.length >= 6, 'El correo dener mas de 6 characteres'],
  displayName: [(value)=>value.length >=1 , 'El name es obligatorio'],
}
export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true)
    if( !isFormValid ) return;
    // console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title='Register'>
      <h1>FormValid {isFormValid ? 'Valido' : 'No valido'}</h1>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='name'
              type='text'
              placeholder='Enter your name'
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='email'
              type='email'
              placeholder='email@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button variant='contained' fullWidth type='submit'>
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Already has account?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Acceed
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
