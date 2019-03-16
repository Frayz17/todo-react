import React from 'react'
import PropTypes from 'prop-types'

export default function ItemToDo({title}) {

  function isItemChecked() {
    const checkbox = document.getElementById('ItemToDo-checkbox');
    const ItemToDoBox = document.getElementById('ItemToDo-itemBox');
    
    if (checkbox.checked === true) {
      ItemToDoBox.style.textDecoration = "line-through";
    } else {
      ItemToDoBox.style.textDecoration = "none"
    }
  }

  return (
    <div id="ItemToDo-itemBox">
      <input id="ItemToDo-checkbox" type="checkbox" onChange={isItemChecked}/>
      {" "}
      <span>{title}</span>
      {" "}
      <button>x</button>
      {" "}
      <span>(ghfgj)</span>
    </div>
  )
}

ItemToDo.propTypes = {
  title: PropTypes.string
}
