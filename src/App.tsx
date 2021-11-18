import React, { lazy, Suspense } from "react"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Todo from "./components/todoList/todo.page"

const Autoriz = lazy(() => import('./components/autorizationPage/autorization.page'));
const SignUp = lazy(() => import('./components/registration/registration.page'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Autoriz} />
            <Route path="/todo" component={Todo}/>
            <Route path="/registration" component={SignUp}/>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
