import React, { Component } from 'react'
import {createTask} from '../model';
import Task from './Task'
import PropTypes from 'prop-types'

const tasksArr = [
  createTask({name: 'Do First', done: true}),
  createTask({name: 'Do Second'}),
  createTask({name: 'Do Third'}),
]

export default class ListToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const tasks = tasksArr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});

    this.setState({
      tasks
    })
  }

  taskDoneHandler = (id) => {
    const { tasks } = this.state;

    this.setState({
      tasks: {
        ...tasks,
        [id]: {
          ...tasks[id],
          done: !tasks[id].done
        }
      }
    })
  }

  render() {
    let { tasks } = this.state;
    tasks = Object.keys(tasks).map(k => tasks[k]);

    return (
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done}
            taskDoneHandler={this.taskDoneHandler}
          />
        ))}
      </div>
    )
  }
}

// ListToDo.propTypes = {
//   prop: PropTypes
// }