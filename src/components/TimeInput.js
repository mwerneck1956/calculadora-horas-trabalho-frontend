import React, { Fragment } from "react";

//Componente Base
import {TimePicker} from 'react-materialize'

export function TimeInput(props) {
  return (
    <Fragment>
      <p style={{ textAlign: "initial" }}>{props.label}</p>
      <TimePicker
        onChange = {(h,m)=>props.onChange(h,m)}
        options={{
          autoClose: false,
          container: null,
          defaultTime: "now",
          duration: 350,
          fromNow: 0,
          i18n: {
            cancel: "Cancelar",
            clear: "Limpar",
            done: "Ok",
          },
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd:null,
          onOpenStart: null,
          onSelect:null ,
          showClearBtn: true,
          twelveHour: false,
          vibrate: true,
        }}
      />
    </Fragment>
  );
}
