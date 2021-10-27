import React, { useState } from 'react';
import "./todoAdd.component.scss"

const Modal = ({ addModalActive, setAddModalActive,arrayForAddTodos,setArrayForAddTodos})=> {

    const [titleTodo, setTitleTodo] = useState()

    const createTodoItem = (title) => {
      const todoItem =
      {
        id: arrayForAddTodos.length + 1,
        title: title,
      }
    setArrayForAddTodos([...arrayForAddTodos,todoItem])
    }  

    return (
      <div className={addModalActive ? "modalAdd active" : "modalAdd"} onClick={() => setAddModalActive(false)}>
        <div className="addCard" autocomplete="off" onClick={e => e.stopPropagation()}>
          <div className="bodyAddCard">
            <div>
              <label>Введите заголовок<span>*</span></label>
              <input type='text' onChange={(e) => { setTitleTodo(e.target.value) }} required />
            </div>
            <button className="bot-send-mail" onClick={() => { setAddModalActive(false); 
                createTodoItem(titleTodo); }}>Создать</button>
          </div>
        </div>
      </div>
    )
}
export default Modal;