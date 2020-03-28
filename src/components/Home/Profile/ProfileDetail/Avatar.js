import React from 'react'

export const Avatar = (props) => (
    <div className="avatar">
      <img src={props.foto} alt=""/>
      <p>@{props.nombre}</p>
    </div>
  );