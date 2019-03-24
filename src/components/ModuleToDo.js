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
      acc.push(curr);
      return acc;
    }, []);

    this.setState({
      tasks
    })
  }

  handlerCreateTask = (name) => {
      const task = createTask({name: name});
      const tasks = [...this.state.tasks]
      tasks.push(task)

      this.setState({
        tasks
      })
  }

  handlerTaskDelete = (id) => () => {
    let tasks  = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)

    this.setState({
      tasks
    })
  }

  handlerTaskDone = (id) => {
    let tasks = [...this.state.tasks];

    tasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task
    })

    this.setState({
      tasks
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
