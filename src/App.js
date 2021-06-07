import './App.css';
import { Header } from './MyComponents/Header'
import { Todos } from './MyComponents/Todos'
import { AddTodo } from './MyComponents/AddTodo'
import { useState, useEffect } from 'react'
import { About } from './MyComponents/About'
import { SearchTodo } from './MyComponents/SearchTodo'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { MatchingTodos } from './MyComponents/MatchingTodos';


function App() {

  let initTodo;
  localStorage.getItem('todos')===null ? initTodo = [] : initTodo = JSON.parse(localStorage.getItem('todos'))


  function addTodo(title,desc){
    let sno;
      //this statement can be used if you want the list to appear in the same order as they are added
      // todos.length===0 ? sno = 1 : sno = todos[todos.length-1].sno+1;
      //but we want the last added todo to show first so we will go with this:
    todos.length===0 ? sno = 1 : sno = todos[0].sno+1;

    let myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }

    setTodos([myTodo,...todos])
  }

  function onDelete(todo){
    setTodos(todos.filter((item) => item!==todo))
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])


  const [query, setQuery] = useState('')
  const [matchingTodo, setMatchingTodo] = useState('');
  // setMatchingTodo(props.todos.filter((todo) => (todo.title)===props.query));

  useEffect(() => {
      setMatchingTodo(todos.filter((todo) => (todo.title)===query))
  }, [query,todos])



  //this function executes when the search form is submitted
  function queryValue(query){
    setQuery(query);
    setMatchingTodo(todos.filter((todo) => (todo.title)===query));
  }




  return (
    <div>
      <Router>
        <Header todos={todos} />

        <Switch>
          <Route exact path='/'>
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/addtodo'>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path='/searchtodo'>
            <SearchTodo todos={todos} queryValue={queryValue}/>
            <MatchingTodos matchingTodos={matchingTodo} onDelete={onDelete}/> 
              
          </Route>
        </Switch>
          
      </Router>
    </div>
    
  );
}

export default App;
