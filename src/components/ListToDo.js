import React, { Component } from 'react'
import ItemToDo from './ItemToDo'
import PropTypes from 'prop-types'

export default class ListToDo extends Component {


  render() {
    return (
      <div>
        <ItemToDo />
      </div>
    )
  }
}

ListToDo.propTypes = {
  prop: PropTypes
}