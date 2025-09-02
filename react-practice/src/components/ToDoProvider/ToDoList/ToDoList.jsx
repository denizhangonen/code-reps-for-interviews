import { useContext, useState } from "react"

import { ToDoContext } from '../ToDoContext/ToDoContext'


const ToDoList = () => {
  const { items, removeItem } = useContext(ToDoContext);

  return items && items.length > 0 && (
    <ul>
      {items.map(i => <li key={i.id}>
        {i.title}
        <button onClick={() => removeItem(i.id)}>Remove</button>
      </li>
      )}
    </ul>
  )
}

export default ToDoList;