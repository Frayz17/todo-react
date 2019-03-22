import React from 'react'
import PropTypes from 'prop-types'

export default function Task({name, id, done, taskDoneHandler}) {
  const styleStroke = {
    textDecoration: "line-through"
  }
    
  return (
    <div style={done === true ? styleStroke : null}>
      <input type="checkbox" checked={ done }  onChange={ () => taskDoneHandler(id) }/>
      {" "}
      <span>{name}</span>
      {" "}
      <button>x</button>
      {" "}
      <span>{id}</span>
    </div>
  )
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  taskDoneHandler: PropTypes.func.isRequired
}
