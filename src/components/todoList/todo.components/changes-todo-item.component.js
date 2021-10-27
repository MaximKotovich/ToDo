import React, { useState } from 'react';
import "./todo-add.component.scss"
import { addTask, deleteTask, getTodos } from "../api-for-todos/api-todo"

const СhangesTodoItem = ({ itemTodo, changeModalActive, setChangeModalActive, arrayForAddTodos, setArrayForAddTodos }) => {

  const [changeTodoItem, setChangeTodoItem] = useState()

  const createTodoItem = async (title) => {
    await deleteTask(itemTodo.id)
    await addTask({ description: title })
    const res = await getTodos()
    setArrayForAddTodos(res.data.data)
  }

  return (
    <div className={changeModalActive ? "modalAdd active" : "modalAdd"} onClick={() => setChangeModalActive(false)}>
      <div className="addCard" autocomplete="off" onClick={e => e.stopPropagation()}>
        <div className="bodyAddCard">
          <div>
            <label>Введите новый заголовок</label>
            <label>{itemTodo.description}</label>
            <input type='text' onChange={(e) => { setChangeTodoItem(e.target.value) }} required />
          </div>
          <button className="bot-send-mail" onClick={() => { setChangeModalActive(false); createTodoItem(changeTodoItem) }}>Изменить</button>
        </div>
      </div>
    </div>
  )
}
export default СhangesTodoItem;