import React, {useState} from "react"
import "./todoPage.scss"
import Button from '@mui/material/Button';
import ArrayTodo from "./todoItem.component"
import Modal from "./todoAdd.component"
import { arrayTodo } from "./todoArray"


const Todo = () =>{

    const [modalActive, setModalActive] = useState(false)
    const [arrayForAddTodos, setArrayForAddTodos] = useState(arrayTodo)

    return(
        <div className="todoPage">
            <div className="todoBody">
                <Modal 
                addModalActive={modalActive}
                setAddModalActive={setModalActive}
                arrayForAddTodos={arrayForAddTodos}
                setArrayForAddTodos={setArrayForAddTodos}
                />
                <ArrayTodo 
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