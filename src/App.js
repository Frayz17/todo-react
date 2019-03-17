import React, { Component } from 'react';
import FormToDo from './components/FormToDo';
import ListToDo from './components/ListToDo';

class App extends Component {

  createTask() {
    console.log('create task')
  }

  render() {
    return (
      <div>
        <FormToDo
          createTask={this.createTask}
        />
        <ListToDo
          createTask={this.createTask}
        />
      </div>
    );
  }
}

export default App;
