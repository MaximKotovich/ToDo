import React, { useState, useEffect } from "react"
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTask, getTodos } from "../api-for-todos/api-todo"

const ArrayTodo = ({ setItemTodo, setChangeModalActive, arrayForAddTodos, setArrayForAddTodos }) => {

    useEffect(() => {
        getAllTodos()
    }, [arrayForAddTodos.length])

    const getAllTodos = async () => {
        const res = await getTodos()
        setArrayForAddTodos(res.data.data)
        return (res.data.data)
    }
    const deleteItemTodo = async (id) => {
        await deleteTask(id)
        await getAllTodos()
    }
    return (
        <>
            {arrayForAddTodos.map((item, pos) => {
                return (
                    <div className="todoList" key={pos}>
                        <input type="checkbox" className="checkboxTodoList" />
                        <div className="todoTitle">{item.description}</div>
                        <div className="EditIcon" onClick={() => {
                            setChangeModalActive(true);
                            setItemTodo({ id: item._id, description: item.description })
                        }}><EditIcon /></div>
                        <div className="CloseIcon" onClick={() => { deleteItemTodo(item._id) }}><CloseIcon /></div>
                    </div>
                )
            })}
        </>
    )
}

export default ArrayTodo;