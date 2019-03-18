import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }

  checkedHandler = (event) => {
    if (event.target.checked) {
      this.setState({
        isChecked: true
      })
    } else {
      this.setState({
        isChecked: false
      })
    }
  }

  isTaskChecked() {
    if (this.state.isChecked) {
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
        <input type="checkbox"  onChange={this.checkedHandler}/>
        {this.isTaskChecked()}
      </div>
    )
    }
  
}

Task.propTypes = {
  title: PropTypes.string
}
