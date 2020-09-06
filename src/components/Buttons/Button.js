import React from 'react'
import './Buttons.css'

export function Button(props) {
  return (
    <button
      className="customButton bgOrange"
      onClick={props.onClick}
    >
     {props.title}
    </button>
  )
}
