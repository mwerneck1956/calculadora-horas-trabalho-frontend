import React from "react";

//Hook customizado para ajustar a responsividade
import useWindowSize from "../CustomHooks/useWindowSize";

//Compontes do materialize
import { Row, Col, Button, Select, TimePicker } from "react-materialize";

//Utilizando grid do material-ui para definir o layout
import { Grid, TextField } from "@material-ui/core";

import timeIlustration from "../assets/imgs/HorarioIlustration.svg";
export default function WorkTimeCalculator() {
  const size = useWindowSize();
  {
    console.log(size);
  }
  return (
    <Grid
      justify={size.width > 966 ? "space-around" : "center"}
      container
      direction="row"
      style={{ marginTop: "5%" }}
    >
      <Grid item md={6} lg={6} xl={6}>
        <h5>Calculadora de horas trabalhadas</h5>
        <Grid md = {5} lg={6} xl ={4}>
          <p style={{textAlign:"initial"}}>
            Selecionar Horário de entrada
          </p>
          <TimePicker
            label ="Selecionar Horário de entrada"
            id="TimePicker-13"
            options={{
              autoClose: false,
              container: null,
              defaultTime: "now",
              duration: 350,
              fromNow: 0,
              i18n: {
                cancel: "Cancel",
                clear: "Clear",
                done: "Ok",
              },
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              onSelect: null,
              showClearBtn: false,
              twelveHour: false,
              vibrate: true,
            }}
          />
        </Grid>

        {/*
         <Grid xl={6}>
          <TextField
            id="date"
            label="Escolha a data"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid xl={6} container direction="row">
          <Button
            style={{
              width: "40%",
              backgroundColor: "#F07900",
              color: "whitesmoke",
            }}
          >
            Calcular
          </Button>
        </Grid> */}
      </Grid>
      <Grid item className="center-align" md={6} lg={6} xl={5}>
        <img
          src={timeIlustration}
          style={{
            width: "100%",
            maxHeight: "auto",
          }}
        ></img>
      </Grid>
    </Grid>
  );
}
