import React, {useState, useEffect} from "react"
import "./todo.page.scss"
import Button from '@mui/material/Button';
import ArrayTodo from "./todo.components/todo-item.component"
import Modal from "./todo.components/todo-add.component"
import ChangesTodoItem from "./todo.components/changes-todo-item.component"

const Todo = () =>{

    const [modalActive, setModalActive] = useState(false)
    const [changeModalActive, setChangeModalActive] = useState(false)
    const [arrayForAddTodos, setArrayForAddTodos] = useState([])
    const [itemTodo, setItemTodo] = useState({})
   
    return(
        <div className="todoPage">
            <div className="todoBody">
                <Modal 
                addModalActive={modalActive}
                setAddModalActive={setModalActive}
                arrayForAddTodos={arrayForAddTodos}
                setArrayForAddTodos={setArrayForAddTodos}
                />
                <ChangesTodoItem
                itemTodo = {itemTodo}
                changeModalActive = {changeModalActive}
                setChangeModalActive={setChangeModalActive}
                arrayForAddTodos={arrayForAddTodos}
                setArrayForAddTodos={setArrayForAddTodos}
                />
                <ArrayTodo 
                setItemTodo = {setItemTodo}
                changeModalActive = {changeModalActive}
                setChangeModalActive={setChangeModalActive}
                arrayForAddTodos={arrayForAddTodos}
                setArrayForAddTodos={setArrayForAddTodos}
                />
                <Button variant="contained" className="addTodoButton" onClick={()=> setModalActive(true)}
                >Добавить новое задание</Button>             
            </div>            
        </div>        
    )
}
export default Todo;