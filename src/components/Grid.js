import React , {useState} from 'react'
import ShowGrid from './ShowGrid'

function Grid(props) {
  function handleClick(event){
    console.log(event.target);
  }

  return (
    <ShowGrid grid={props.grid} onClick={handleClick} ></ShowGrid>
  )
}

export default Grid