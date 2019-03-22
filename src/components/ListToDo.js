import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

export default class ListToDo extends Component {
  static propTypes = {
    tasks: PropTypes.object.isRequired,
    handlerTaskDone: PropTypes.func.isRequired,
    handlerTaskDelete: PropTypes.func.isRequired
  }

  render() {
    let { tasks, handlerTaskDone, handlerTaskDelete } = this.props;
    tasks = Object.keys(tasks).map(k => tasks[k]);

    return (
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done}
            handlerTaskDone={handlerTaskDone}
            handlerTaskDelete ={handlerTaskDelete}
          />
        ))}
      </div>
    )
  }
}
