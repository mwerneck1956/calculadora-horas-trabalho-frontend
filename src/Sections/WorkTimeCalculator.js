import React, { useState, useEffect } from "react";

//Hook customizado para ajustar a responsividade
import useWindowSize from "../CustomHooks/useWindowSize";

//Compontes do materialize
import { Button } from "react-materialize";

//Components Customizados criados para o projeto
import { TimeInput } from "../components/index";

//Utilizando grid do material-ui para definir o layout
import { Grid, TextField } from "@material-ui/core";

//Ilustração de tempo utilizada na pagina
import timeIlustration from "../assets/imgs/HorarioIlustration.svg";

export default function WorkTimeCalculator() {
  const size = useWindowSize();
  const [arrivalTime, setArrivalTime] = useState(0);
  const [departureTime, setDepartureTime] = useState(0);
  useEffect(() => {
    console.log("arrival time", arrivalTime);
  }, [arrivalTime]);
  return (
    <Grid
      justify={size.width > 966 ? "space-around" : "center"}
      container
      direction="row"
      style={{ marginTop: "5%" }}
    >
      <Grid item md={6} lg={4} xl={4}>
        <h5>Calculadora de horas trabalhadas</h5>
        <Grid direction="row">
          <Grid md={5} lg={6} xl={4}></Grid>
          <Grid md={5} lg={6} xl={4}>
            <TextField
              id="time"
              label="Horario Saida"
              type="time"
              defaultValue="07:30"
              fullWidth
              onChange = {(e) => setArrivalTime(e.target.value)}
             
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </Grid>
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
         */}
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
