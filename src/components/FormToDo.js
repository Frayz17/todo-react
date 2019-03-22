import React, { Component } from 'react';
import { createTask, tasksDB } from '../model';
import PropTypes from 'prop-types';

export default class FormToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handlerInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  resetValue = () => {
    this.setState({ inputValue: '' })
  }

  // wrapperHandlerCreateTask = () => {

  // }

  render() {
    const { inputValue } = this.state;
    const { handlerCreateTask } = this.props;

    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handlerInputValue} />
        {" "}
        <button onClick={ handlerCreateTask(inputValue) }>Add</button>

      </div>
    )
  }
}

FormToDo.propTypes = {
  handlerCreateTask: PropTypes.func.isRequired
}