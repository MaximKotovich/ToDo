import {AddTaskTodo} from "../components/interface-todo"

export enum todoTypes {
    GET_ALL_TODO = "GET_ALL_TODO",
    ADD_TODO = "ADD_TODO",
    SAGA_GET_ALL_TODO = "SAGA_GET_ALL_TODO",
    SAGA_ADD_TODO = "SAGA_ADD_TODO"
 }


export interface TodoItemList {
    completed?:boolean,
    createdAt?:string,
    description:string,
    owner?:string,
    updatedAt?:string,
    __v?:number,
    _id:string,
 }

 interface todoState {
    todoItem: TodoItemList[]
}
const initialState:todoState = {
    todoItem: [],
}

interface addTodo {
    type: todoTypes.ADD_TODO;
    payload: {
        _id:string,
        description: string,
    };
}
interface getTodo {
    type: todoTypes.GET_ALL_TODO;
    payload: [];
}
type todoAction = addTodo|getTodo

export const todoList = (state = initialState, action:todoAction):todoState => {
    switch (action.type) {
        case todoTypes.GET_ALL_TODO:
            return {
                ...state, todoItem: action.payload
            }
        case todoTypes.ADD_TODO:
            return {
                ...state, todoItem: [...state.todoItem, action.payload]
            }
        default: return state
    }
}

export const addTodoAction = (payload:TodoItemList) => ({ type: todoTypes.ADD_TODO, payload })
export const getTodoAction = (payload:TodoItemList) => ({ type: todoTypes.GET_ALL_TODO, payload })

export const getSagaTodoAction = () => ({type: todoTypes.SAGA_GET_ALL_TODO})
export const addSagaTodoAction = (payload:AddTaskTodo) => ({type: todoTypes.SAGA_ADD_TODO, payload})