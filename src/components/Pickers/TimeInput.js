import React, { Fragment } from "react";

//Componente Base
import { TimePicker, DatePicker } from "react-materialize";

//css
import "./picker.css";
export function TimeInput(props) {
  return (
    <Fragment>
      <p style={{ textAlign: "initial" }}>{props.label}</p>
      <input
        type ="time"
        onChange= {(event)=>props.onChange(event)}
        value={props.value}
        className="timePicker"
        //onChange = {(h,m)=>props.onChange(h,m)}
      />
    </Fragment>
  );
}
