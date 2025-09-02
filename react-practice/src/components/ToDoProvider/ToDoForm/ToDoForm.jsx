import { useContext, useState } from "react"

import { ToDoContext } from '../ToDoContext/ToDoContext'


const ToDoForm = () => {
  const [text, setText] = useState('')
  const { addItem } = useContext(ToDoContext);

  const changeTextHandler = (e) => {
    setText(e.target.value)
  }
  const addItemHandler = () => {
    addItem(text);
    setText('')
  }
  return (
    <div>
      <h2>To Do Form</h2>
      <div style={{ display: "flex", flexDirection: 'row' }}>

        <input type="text" id="todoItem" value={text} onChange={changeTextHandler} />
        <button onClick={addItemHandler}>Add</button>
      </div>
    </div>
  )
}

export default ToDoForm;