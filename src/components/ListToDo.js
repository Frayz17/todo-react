import React, { Component } from 'react'
import ItemToDo from './ItemToDo'
import PropTypes from 'prop-types'

export default class ListToDo extends Component {


  render() {
    return (
      <div>
        <ItemToDo
          title={"Do First"}
        />
        <ItemToDo
          title={"Do Second"}
        />
        <ItemToDo
          title={"Do Third"}
        />
      </div>
    )
  }
}

// ListToDo.propTypes = {
//   prop: PropTypes
// }