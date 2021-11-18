import { TypedUseSelectorHook,useSelector } from 'react-redux';
import { combineReducers } from "redux";
import {todoList} from "../components/todoList/store/todo-list.reducer"

export const rootReducer = combineReducers({
    todoList
})

export type rootState = ReturnType<typeof rootReducer>
export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector