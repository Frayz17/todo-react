import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormToDo extends Component {
  static propTypes = {
    handlerCreateTask: PropTypes.func.isRequired
  }

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

  wrapperHandlerCreateTask = (inputValue) => () => {
    this.props.handlerCreateTask(inputValue);
    this.resetValue();
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input type="text" value={ inputValue } onChange={ this.handlerInputValue } />
        {" "}
        <button disabled={ inputValue === '' ? true : null } onClick={ this.wrapperHandlerCreateTask(inputValue) }>Add</button>
      </div>
    )
  }
}
