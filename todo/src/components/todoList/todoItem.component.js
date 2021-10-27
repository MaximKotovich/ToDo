import React, { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const ArrayTodo = ({ arrayForAddTodos, setArrayForAddTodos }) => {

    const deleteTodo = (id) => {
        const arr = arrayForAddTodos.filter(arrayTodos => arrayTodos.id !== id)
        setArrayForAddTodos(arr)
    }

    return (
        <>
            {arrayForAddTodos.map((item) => {
                return (
                    <div className="todoList" key={item.id}>
                        <input type="checkbox" className="checkboxTodoList" />
                        <div className="todoTitle">{item.title}</div>
                        <div className="EditIcon"><EditIcon /></div>
                        <div className="CloseIcon" onClick={() => deleteTodo(item.id)}><CloseIcon /></div>
                    </div>
                )
            })}
        </>
    )
}

export default ArrayTodo;