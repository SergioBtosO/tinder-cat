import React from 'react'

export const Avatar = (props) => (
    <div className="avatar">
      <img src={props.image} alt=""/>
      <p>@{props.nick}</p>
    </div>
  );