import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export  function CustomizedSnackbar(props) {

  return (
    <div>
      <Snackbar open={props.open} autoHideDuration={6000} /*onClose={handleClose} */>
        <Alert severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}