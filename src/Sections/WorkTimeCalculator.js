import React, { useState, useEffect } from "react";

//Hook customizado para ajustar a responsividade
import useWindowSize from "../CustomHooks/useWindowSize";

//Compontes do materialize


//Components Customizados criados para o projeto
import { TimeInput } from "../components/TimeInput/TimeInput";

//Utilizando grid do material-ui para definir o layout
import { Grid, TextField ,Button} from "@material-ui/core";

//Css
import '../styles/Buttons.css'

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
      style={{ marginTop: "3%" }}
      justify="center"
      container
      lg={12}
      xl={12}
    >
      <Grid xs={12} lg={3} direction="row" justify={size.width > 1273 ? "space-between" :"center"}item container>
        <Grid sm={12} lg={12}>
          <h6>Calculadora de horas trabalhadas</h6>
        </Grid>

        <Grid xs={8} md={5} sm={5} lg ={5}>
          <TimeInput label="Data"/>
        </Grid>
        <Grid lg={6} md={5} sm={5} xs={0}/>
        <Grid  xs={8} md={5} sm={5} lg={5}>
          <TimeInput label="Horário Entrada"/>
        </Grid>
        <Grid sm={5} md={5} xs={8} lg={5}>
          <TimeInput label="Horário Saída"/>
        </Grid>
        <Grid  md={5} sm={5} xs={8} lg={12} xl={6}>
          <button>
              Calcular
          </button>
        </Grid>
        
      </Grid>
      <Grid lg={1}/>
      <Grid md={6} lg={4} xl={4}>
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

/* <Grid
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
                onChange={(e) => setArrivalTime(e.target.value)}
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
          }
         </Grid>
         
       </Grid> */
