import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import container from './CustomAlert.container';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomAlert = ({
  alert: { openAlert, severity, message },
  onCloseAlert
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={openAlert}
      onClose={onCloseAlert}
    >
      <Alert onClose={onCloseAlert} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default container(CustomAlert);
