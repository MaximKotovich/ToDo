import React, { useState } from 'react';
import "./todo-add.component.scss"
import { addTask } from "../api-for-todos/api-todo"
import {addTodoAction,addSagaTodoAction} from "../store/todo-list.reducer"
import {useDispatch} from "react-redux";

const Modal: React.FunctionComponent<{addModalActive:boolean; setAddModalActive: React.Dispatch<boolean>  
}> = ({ addModalActive, setAddModalActive}) => {

  const [titleTodo, setTitleTodo] = useState<string>('')
  const dispatch = useDispatch()

  return (
    <div className={addModalActive ? "modal-add active" : "modal-add"} onClick={() => setAddModalActive(false)}>
      <div className="add-card" onClick={e => e.stopPropagation()}>
        <div className="body-add-card">
          <div>
            <label>Введите заголовок<span>*</span></label>
            <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setTitleTodo(e.target.value) }} required />
          </div>
          <button className="bot-send-mail" onClick={() => {
            setAddModalActive(false);
            dispatch(addSagaTodoAction({description:titleTodo}))
          }}>Создать</button>
        </div>
      </div>
    </div>
  )
}
export default Modal;