import React, {useEffect, useState} from 'react';
import classes from './App.module.scss';
import { ITodo } from './types/types';
import axios from 'axios';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      setTodos(res.data)
      setIsLoading(false)
    })
  }, [])

  if (!isLoading) {
    return (
      <div className={classes.App}>
        <Header count={todos.length}/>
        <TodoList todos={todos}/>
      </div>
    );
  } else {
    return (
      <>
        Loading...
      </>
    )
  }
}

export default App;
