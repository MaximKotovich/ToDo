import React, { useState } from 'react';
import "./todo-add.component.scss"
import {deleteTask} from "../api-for-todos/api-todo"
import { useDispatch} from "react-redux";
import {getSagaTodoAction,addSagaTodoAction} from "../store/todo-list.reducer"
import { useTypeSelector } from '../../../store/reducers';
import {ItemTodoChange} from "./interface-todo"


const СhangesTodoItem: React.FunctionComponent<{itemTodo:ItemTodoChange;changeModalActive:boolean;
  setChangeModalActive: React.Dispatch<boolean>  
}>  = ({itemTodo, changeModalActive,setChangeModalActive}) => {

  const [changeTodoItem, setChangeTodoItem] = useState<string>('')
  const dispatch = useDispatch()
  const todoItemList =  useTypeSelector((state) => state.todoList.todoItem)

  const createTodoItem = async (title:string) => {
    await deleteTask(itemTodo.id)
    dispatch(addSagaTodoAction({description:title}))
    dispatch(getSagaTodoAction());
    }

  return (
    <div className={changeModalActive ? "modal-add active" : "modal-add"} onClick={() => setChangeModalActive(false)}>
      <div className="add-card" onClick={e => e.stopPropagation()}>
        <div className="body-add-card">
          <div>
            <label>Введите новый заголовок</label>
            <label>{itemTodo.description}</label>
            <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setChangeTodoItem(e.target.value) }} required />
          </div>
          <button className="bot-send-mail" onClick={() => { setChangeModalActive(false); createTodoItem(changeTodoItem) }}>Изменить</button>
        </div>
      </div>
    </div>
  )
}
export default СhangesTodoItem;