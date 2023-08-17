import './App.css';
import './index.css'
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { TodoList } from './components/todo-list';
import { AddTodo } from './components/addTodo';


function App() {

  const [state, setState] = useState({});

  useEffect(()=>{
    let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : null;
  
    if(!todos){
      axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        let res = response.data.slice(0, 10);
        setState({ ...state, todos: res});
        //alert('setting todos from APIs')
        localStorage.setItem('todos', JSON.stringify(res));
        console.log('state', state);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Sorry, something went wrong.');
      });
    }
    else{
      setState({ ...state, todos});
      //alert('setting todos from local storage');
      console.log('state', state);
    }

  },[])
  




  const changeTodo = (todoId)=>{
    let todos = state.todos;
    todos[todoId].completed = !todos[todoId].completed;
    setState({...state, todos: todos});
    localStorage.setItem('todos', JSON.stringify(todos));

  }

  const addTodo = (newTodo)=>{
    if(newTodo.title === ''){
      alert('Please add some text.!');
      return
    }
    console.log(newTodo)
    let todos = state.todos;
    newTodo.id = todos[todos.length - 1].id + 1;
    todos.unshift(newTodo);
    setState({...state, todos});
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  



  return (
    <div className="App">
    
        <AddTodo addTodo={addTodo}/>
    {state['todos'] ? <TodoList todos={state.todos} onchange={changeTodo}/> : 'No todos here'}
  
    </div>
  );
}

export default App;
