import * as React from "react";
import { useState } from 'react';
import { Box, Container, Typography, makeStyles, Card, CardContent, TextField, Button, Snackbar } from "@material-ui/core";
import { useFormik } from 'formik';
import { validationSchema } from './../utils/string_util';
import { Link, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from './../service/auth_service';
import { Alert } from "@material-ui/lab";

import { getAuthErrorMessage } from './../utils/auth_utiils';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '0rem 0.5rem'
  },
  title: {
    fontSize: 14,
  },
  links: {
    color: '#007FFF',
    cursor: 'pointer',
  },

});

const LoginPage = () => {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [errorText, setText] = useState('An error has occurred. Please try again.');


  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const user = await signInWithEmailAndPassword(values.email, values.password);

      if (getAuthErrorMessage(user) !== null) {
        setText(getAuthErrorMessage(user));
        setOpen(true);
      } else {
        history.push('/');
      }
      formik.resetForm();


    },
  });

  return (
    <Box style={{ width: '100%', height: '100vh', scrollBehavior: 'unset', backgroundColor: '#ccc' }}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorText}
        </Alert>
      </Snackbar>
      <Box height="100%" display="flex" flexGrow={1} justifyContent="center" alignItems="center">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center">
              Login
            </Typography>

            <form onSubmit={formik.handleSubmit}>

              <TextField
                margin={'normal'}
                label={'Email'}
                name={'email'}
                id={'email'}
                required
                type={'email'}
                variant={'outlined'}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />

              <TextField
                id={'password'}
                margin={'normal'}
                label={'Password'}
                name={'password'}
                type={'password'}
                required
                variant={'outlined'}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
              />
              <Box width={100} mx="auto">
                <Button color={'primary'} type={'submit'} variant={'contained'} style={{ margin: '0.5rem 0rem' }}>
                  Submit
                </Button>
              </Box>

              <Typography variant='body1' gutterBottom align='center'>
                Don't have a account ?
              </Typography>
              <Typography variant='body2' gutterBottom align='center'>
                <Link to="/signup"> <span className={classes.links} >
                  SignUp
                </span></Link>

              </Typography>


            </form>


          </CardContent>

        </Card>
      </Box>

    </Box>
  );
};

export default LoginPage;

