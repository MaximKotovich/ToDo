import React, { useState } from "react"
import "./todo.page.scss"
import Button from '@mui/material/Button';
import ArrayTodo from "./components/todo-item.component"
import Modal from "./components/todo-add.component"
import ChangesTodoItem from "./components/changes-todo-item.component"
import {useHistory} from "react-router-dom"
import {ItemTodoChange} from "./components/interface-todo"


const Todo = () => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    const [changeModalActive, setChangeModalActive] = useState<boolean>(false)
    const [itemTodo, setItemTodo] = useState<ItemTodoChange>({id:""})
    const history = useHistory()

    const logOut = () =>{
        localStorage.clear();
        history.push('/')
    }

    return (
        <>
        <Button variant="contained" onClick={() => {logOut()}}>Logout</Button>
        <div className="todo-page">
            <div className="todo-body">
                <Modal
                    addModalActive={modalActive}
                    setAddModalActive={setModalActive}
                />
                <ChangesTodoItem
                    itemTodo={itemTodo}
                    changeModalActive={changeModalActive}
                    setChangeModalActive={setChangeModalActive}
                />
                <ArrayTodo
                    itemTodo={itemTodo}
                    setItemTodo={setItemTodo}
                    setChangeModalActive={setChangeModalActive}
                />
                <Button variant="contained" className="add-todo-button" onClick={() => setModalActive(true)}
                >Добавить новое задание</Button>
            </div>            
        </div>
        
        </>
    )
}
export default Todo;