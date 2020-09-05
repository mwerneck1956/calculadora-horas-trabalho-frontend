import React, { Fragment } from "react";

//Componente Base
import {TimePicker} from 'react-materialize'

export function TimeInput(props) {
  return (
    <Fragment>
      <p style={{ textAlign: "initial" }}>{props.label}</p>
      <TimePicker
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
          onSelect: (hour,minute) => props.onSelect(hour,minute),
          showClearBtn: false,
          twelveHour: false,
          vibrate: true,
        }}
      />
    </Fragment>
  );
}
