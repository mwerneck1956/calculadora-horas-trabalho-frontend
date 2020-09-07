import React, { useState, useEffect } from "react";

//Hook customizado para ajustar a responsividade
import useWindowSize from "../CustomHooks/useWindowSize";

//Compontes do materialize

//Components Customizados criados para o projeto
import {
  TimeInput,
  Button,
  DateInput,
  DialogWorkTimeStatistics,
} from "../components/index";

//Utilizando grid do material-ui para definir o layout
import { Grid } from "@material-ui/core";

//api
import api from "../services/api";

//Ilustração de tempo utilizada na pagina
import timeIlustration from "../assets/imgs/HorarioIlustration.svg";

export default function WorkTimeCalculator() {
  function calcularHorario(date, arrivalTime, departureTime) {
    let body = {
      date: date.toString(),
      arrivalTime: arrivalTime.toString(),
      departureTime: departureTime.toString(),
    };
    api
      .post("/calcularHorario", body)
      .then((res) => {
        setStatisticsVisible(true);
        setData(res.data);
      })
      .catch((err) => {
        console.log("erro");
      });
  }

  function WorkStatisticsSection() {
    return (
      <Grid xl={5} lg={5} item>
        <h5>Estatísticas</h5>
        <h6>Horas Diurnas : <spam>{data.dayTimeHours}</spam>  </h6>
        <h6>Horas Noturnas  :<spam>{data.nightTimeHours}</spam>  </h6>
      </Grid>
    );
  }
  //Custom Hooks
  const size = useWindowSize();

  //State hooks
  const [data, setData] = useState({});
  const [stasticsVisible, setStatisticsVisible] = useState(false);
  const [arrivalTime, setArrivalTime] = useState(0);
  const [departureTime, setDepartureTime] = useState(0);
  const [date, setDate] = useState(new Date());

  return (
    <Grid
      style={{ marginTop: "3%" }}
      justify="center"
      container
      lg={12}
      xl={12}
    >
      <Grid
        xs={12}
        lg={3}
        direction="row"
        justify={size.width > 1273 ? "space-between" : "center"}
        item
        container
      >
        <Grid sm={12} sm={10} md={10} lg={12}>
          <h5>Calculadora de horas trabalhadas</h5>
        </Grid>

        <Grid xs={8} md={5} sm={5} lg={6} xl={5}>
          <DateInput
            label="Data"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />
        </Grid>
        <Grid lg={6} md={5} sm={5} xs={0} />
        <Grid xs={8} md={5} sm={5} md={5} lg={5}>
          <TimeInput
            onChange={(event) => setArrivalTime(event.target.value)}
            value={arrivalTime}
            label="Horário Entrada"
          />
        </Grid>
        <Grid sm={5} md={5} xs={8} lg={5}>
          <TimeInput
            onChange={(event) => setDepartureTime(event.target.value)}
            value={departureTime}
            label="Horário Saída"
          />
        </Grid>
        <Grid md={5} sm={5} xs={8} lg={12} xl={12}>
          <Button
            onClick={() => calcularHorario(date, arrivalTime, departureTime)}
            title="Calcular"
          />
        </Grid>
      </Grid>
      <Grid lg={1} />
      <Grid md={6} lg={4} xl={4}>
        <img
          alt="ilustração de horário"
          src={timeIlustration}
          style={{
            width: "100%",
            maxHeight: "auto",
          }}
        ></img>
      </Grid>
      <Grid xs={12} lg={8} justify={size.width > 1280 ? 'flex-start' : 'center' }  container>
          {setStatisticsVisible? WorkStatisticsSection() : null}
      </Grid>
    </Grid>
  );
}
