import React, { Component } from 'react'
import { createTask, tasksLib } from '../model';
import Task from './Task';
import FormToDo from './FormToDo';
// import PropTypes from 'prop-types'

export default class ModuleToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    const tasks = tasksLib.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});

    this.setState({
      tasks
    })
  }

  handlerCreateTask = (name) => () => {
    const task = createTask({name: name});
    tasksLib.push(task);

    this.setState({
      tasks: {
        ...this.state.tasks,
        [task.id]: task  
      }
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
        <FormToDo 
          handlerCreateTask={this.handlerCreateTask}
        />
        
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