import React, { useEffect } from "react"
import { useDispatch} from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTask, getTodos } from "../api-for-todos/api-todo"
import { useHistory } from 'react-router-dom'
//import {getTodoAction} from "../store/todo-list.reducer"
import {getSagaTodoAction} from "../store/todo-list.reducer"
import { useTypeSelector } from "../../../store/reducers";
import {ItemTodoChange} from "./interface-todo"


const ArrayTodo: React.FunctionComponent<{itemTodo:ItemTodoChange;setItemTodo:React.Dispatch<ItemTodoChange>; setChangeModalActive: React.Dispatch<boolean>  
}>  = ({ itemTodo,setItemTodo, setChangeModalActive}) => {
    const dispatch = useDispatch()
    const todoItemList =  useTypeSelector((state) => state.todoList.todoItem)

    const history = useHistory()
    useEffect(() => {
        getAllTodos()
    }, [todoItemList.length])

    const getAllTodos = async () => {
        dispatch(getSagaTodoAction());        
    }

    const changeItemTodo = (id:string, description:string) => {
        setItemTodo({
            id: id,
            description: description,
        })        
    }

    const deleteItemTodo = async (id:string) => {
        await deleteTask(id)
        await getAllTodos()
    }

    

    return (
        <>
            {todoItemList.map((item, pos) => {
                return (
                    <div className="todo-list" key={pos}>
                        <input type="checkbox" className="checkbox-todo-list" />
                        <div className="todo-title">{item.description}</div>
                        <div className="edit-icon" onClick={() => {
                            setChangeModalActive(true);
                            changeItemTodo(item._id, item.description)
                        }}><EditIcon /></div>
                        <div className="close-icon" onClick={() => {deleteItemTodo(item._id)}}><CloseIcon /></div>
                    </div>
                )
            })}
        </>
    )
}

export default ArrayTodo;