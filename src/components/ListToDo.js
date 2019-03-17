import React, { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

export default class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        'Do First',
        'Do Second',
        'Do Third'
      ]
    }
  }


  render() {
    const {tasks} = this.state;
    return (
      <div>
        {tasks.map(task => (
          <Task
            title={task}
          />
        ))}
      </div>
    )
  }
}

// ListToDo.propTypes = {
//   prop: PropTypes
// }