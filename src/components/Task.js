import React from 'react'
import PropTypes from 'prop-types'

export default function Task({name, id, done, handlerTaskDone, handlerTaskDelete}) {
  const styleStroke = {
    textDecoration: "line-through"
  }
    
  return (
    <div style={done === true ? styleStroke : null}>
      <input type="checkbox" checked={ done }  onChange={ () => handlerTaskDone(id) }/>
      {" "}
      <span>{name}</span>
      {" "}
      <button onClick={handlerTaskDelete(id)}>x</button>
      {" "}
      <span>{id}</span>
    </div>
  )
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  handlerTaskDone: PropTypes.func.isRequired,
  handlerTaskDelete: PropTypes.func.isRequired
}
