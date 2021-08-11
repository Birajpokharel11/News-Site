import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

function ResetPassword() {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@email.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
      <CardContent>
        <CardHeader
          subheader="The information can be edited"
          title="Security"
        />
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <TextField
              fullWidth
              helperText="Change your password"
              label="password"
              onChange={handleChange}
              required
              value={values.firstName}
              variant="outlined"
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <TextField
              fullWidth
              label="Confirm Password"
              onChange={handleChange}
              required
              value={values.email}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button color="primary" variant="contained">
          Edit Password
        </Button>
      </Box>
    </>
  );
}

export default ResetPassword;
