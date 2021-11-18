import {put, takeEvery,call} from 'redux-saga/effects'
import {getTodoAction,addTodoAction ,todoTypes} from "./todo-list.reducer"
import {getTodos,addTask} from "../api-for-todos/api-todo"
import {TodoItemList} from "./todo-list.reducer"


export default function * todoSagaWatcher () {
    yield takeEvery(todoTypes.SAGA_ADD_TODO, addTodoSagaWorker); 
    yield takeEvery(todoTypes.SAGA_GET_ALL_TODO, getAllTodoSagaWorker); 
}

function * getAllTodoSagaWorker () {
   const allTodoItem:TodoItemList = yield call(getTodos)
   yield put(getTodoAction(allTodoItem))
}

function * addTodoSagaWorker ({payload}: ReturnType<any>) {
    const addTodoItem:TodoItemList = yield call(addTask, payload)
    yield put(addTodoAction(addTodoItem))
 }

