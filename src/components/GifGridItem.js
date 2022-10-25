import React from 'react'

export const GifGridItem = (props) => {

    console.log(props);
  return (
    <div className="card animate__animated animate__shakeY">
    <p>{props.tittle}</p>
    <img src={props.image} alt={props.tittle}/>
    </div>
  )
}
