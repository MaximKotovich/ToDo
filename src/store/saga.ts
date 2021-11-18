import { spawn } from 'redux-saga/effects'
import todoSagaWatcher from "../components/todoList/store/todo-list.saga"

export default function * rootSaga () {
  yield spawn(todoSagaWatcher)
}