import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }

  // checkedHandler = (event) => {
  //   const { id, taskDoneHandler } = this.props;
  //   taskDoneHandler(id); // switch state 'done' of task in ListToDo

  //   if (event.target.checked) {
  //     this.setState({
  //       isChecked: true
  //     })
  //   } else {
  //     this.setState({
  //       isChecked: false
  //     })
  //   }
  // }

  render() {
    // const { isChecked } = this.state;
    const { id, done, name, taskDoneHandler } = this.props;
    const styleStroke = {
      textDecoration: "line-through"
    };
    
    return (
      <div style={done === true ? styleStroke : null}>
        <input type="checkbox" checked={done === true ? true : null}  onChange={() => taskDoneHandler(id)}/>
        {" "}
        <span>{name}</span>
        {" "}
        <button>x</button>
        {" "}
        <span>(ghfgj)</span>
      </div>
    )
  }
}

Task.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  taskDoneHandler: PropTypes.func.isRequired
}
