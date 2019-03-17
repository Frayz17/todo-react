import React from 'react'
import PropTypes from 'prop-types'

export default function Task({title}) {

  function isItemChecked(event) {
    if (event.target.checked) {
      return (
        <s>
          {" "}
          <span>{title}</span>
          {" "}
          <button>x</button>
          {" "}
          <span>(ghfgj)</span>
        </s>
      )
    } else {
      return (
        <React.Fragment>
          {" "}
          <span>{title}</span>
          {" "}
          <button>x</button>
          {" "}
          <span>(ghfgj)</span>
        </React.Fragment>
      )
    }
  }

  return (
    <div>
      <input type="checkbox" onChange={isItemChecked}/>
      
    </div>
  )
}

Task.propTypes = {
  title: PropTypes.string
}
