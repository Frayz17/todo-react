import React, { Component } from 'react'
import FormToDo from './FormToDo';
import ListToDo from './ListToDo';
import { createTask, tasksLib } from '../model';

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

  handlerCreateTask = (name) => {
      const task = createTask({name: name});

      this.setState({
        tasks: {
          ...this.state.tasks,
          [task.id]: task  
        }
      })
  }

  handlerTaskDelete = (id) => () => {
    const tasks  = this.state.tasks;
    delete tasks[id]

    this.setState({
      tasks
    })
  }

  handlerTaskDone = (id) => {
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

    return (
      <div>
        <FormToDo 
          handlerCreateTask={this.handlerCreateTask}
        />
        <br />
        <ListToDo 
          tasks={tasks}
          handlerTaskDone={this.handlerTaskDone}
          handlerTaskDelete ={this.handlerTaskDelete}
        />
      </div>
    )
  }
}
