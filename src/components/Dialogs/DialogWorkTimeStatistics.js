import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@material-ui/core";
export default function DialogWorkTimeStatistics(props) {
  return (
    <Dialog
      //onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle id="customized-dialog-title">
        Descrição de Horas Trabalhadas
      </DialogTitle>
      <DialogContent dividers>
        <Typography>
          Data:<spam>{props.nightTimeHours}</spam>
        </Typography>

        <Typography>
          Horas Noturnas:<spam>{props.nightTimeHours}</spam>
        </Typography>
        <Typography>
          Horas Diurnas:<spam>{props.dayTimeHours}</spam>
        </Typography>
      </DialogContent>
      <DialogActions>
        <button color="primary">Save changes</button>
      </DialogActions>
    </Dialog>
  );
}
