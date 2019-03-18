import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }

  isItemChecked(event) {
    if (event.target.checked) {
      return (
        <s>
          {" "}
          <span>{this.props.title}</span>
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
          <span>{this.props.title}</span>
          {" "}
          <button>x</button>
          {" "}
          <span>(ghfgj)</span>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div>
        <input type="checkbox" value={} onChange={this.isItemChecked}/>
        
      </div>
    )
    }
  
}

Task.propTypes = {
  title: PropTypes.string
}
