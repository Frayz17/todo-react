import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import '../css/btnLink.css';

const FILTER_SHOW_ALL = 0;
const FILTER_SHOW_ACTIVE = 1;
const FILTER_SHOW_DONE = 2;

export default class ListToDo extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    handlerTaskDone: PropTypes.func.isRequired,
    handlerTaskDelete: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      filterStatus: FILTER_SHOW_ALL
    }
  }

  handlerShowAll = () => {
    this.setState({
      filterStatus: FILTER_SHOW_ALL
    });
  }

  handlerShowActive = () => {
    this.setState({
      filterStatus: FILTER_SHOW_ACTIVE
    });
  }

  handlerShowDone = () => {
    this.setState({
      filterStatus: FILTER_SHOW_DONE
    });
  }

  render() {
    const { handlerShowAll, handlerShowActive, handlerShowDone } = this;
    const { filterStatus } = this.state;
    let { tasks, handlerTaskDone, handlerTaskDelete } = this.props;

    const filteringTasks = () => {
      switch (filterStatus) {
        case FILTER_SHOW_ACTIVE: return tasks.filter(task => task.done === false)
        case FILTER_SHOW_DONE:   return tasks.filter(task => task.done === true)
        default:                 return tasks
      }
    }

    tasks = filteringTasks();

    return (
      <React.Fragment>
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
        <br/>
        <div>
          <span>Show: </span>

          <button 
            style={ filterStatus === 0 ? {fontWeight: "bold"} : null } 
            onClick={ handlerShowAll } 
            className={'btnLink'}
          >All</button>

          {", "}

          <button 
            style={ filterStatus === 1 ? {fontWeight: "bold"} : null } 
            onClick={ handlerShowActive } 
            className={'btnLink'}
          >Active</button>

          {", "}

          <button 
            style={ filterStatus === 2 ? {fontWeight: "bold"} : null } 
            onClick={ handlerShowDone } 
            className={'btnLink'}
          >Done</button>

        </div>
      </React.Fragment>
    )
  }
}
