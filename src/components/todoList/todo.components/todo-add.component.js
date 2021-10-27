import React, { useState } from 'react';
import "./todo-add.component.scss"
import { addTask } from "../api-for-todos/api-todo"

const Modal = ({ addModalActive, setAddModalActive, arrayForAddTodos, setArrayForAddTodos }) => {

  const [titleTodo, setTitleTodo] = useState()

  const createTodoItem = async (description) => {
    const res = await addTask({ description: description })
    setArrayForAddTodos([...arrayForAddTodos, res.data])
  }


  return (
    <div className={addModalActive ? "modalAdd active" : "modalAdd"} onClick={() => setAddModalActive(false)}>
      <div className="addCard" autocomplete="off" onClick={e => e.stopPropagation()}>
        <div className="bodyAddCard">
          <div>
            <label>Введите заголовок<span>*</span></label>
            <input type='text' onChange={(e) => { setTitleTodo(e.target.value) }} required />
          </div>
          <button className="bot-send-mail" onClick={() => {
            setAddModalActive(false);
            createTodoItem(titleTodo);
          }}>Создать</button>
        </div>
      </div>
    </div>
  )
}
export default Modal;