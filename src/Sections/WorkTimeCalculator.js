import React from "react";

//Hook customizado para ajustar a responsividade
import useWindowSize from "../CustomHooks/useWindowSize";

//Compontes do materialize
import { Row, Col, Button } from "react-materialize";

//Utilizando grid do material-ui para definir o layout
import { Grid } from "@material-ui/core";

import timeIlustration from "../assets/imgs/HorarioIlustration.svg";
export default function WorkTimeCalculator() {
  const size = useWindowSize();
  {
    console.log(size);
  }
  return (
    <Grid   justify={size.width > 966 ? "space-around" : "center"} container direction="row" style={{ marginTop: "5%" }}>
      <Grid
      
        item
        md={6}
        lg={6}
        xl={6}
      >
        <h5>Calculadora de horas trabalhadas</h5>
        <Button
          style={{
            backgroundColor: "#F07900",
            color: "whitesmoke",
          }}
        >
          Calcular
        </Button>
      </Grid>
      <Grid item className="center-align" md={6} lg={6} xl={6}>
        <img
          src={timeIlustration}
          style={{
            width: "80%",
            maxHeight: "auto",
          }}
        ></img>
      </Grid>
    </Grid>
  );
}
