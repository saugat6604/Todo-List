
import './App.css';
import Header from "./MyComponents/Header";

import {Todos}  from "./MyComponents/Todos";
import {AddTodo}  from "./MyComponents/AddTodo";
import React, {useState} from 'react';
function App() {
  const onDelete =(todo)=>{
    console.log("I am on delete of todo",todo);
    //not deleting in react this way
    //let index=todos.indexOf(todo);
    //todos.splice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding this todo",title,desc)
    let sno = todos[todos.length-1].sno+1
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,

    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  } 

  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"go to school",
      desc:"u need to got to school to study"
    },
    {
      sno:2,
      title:"go to temple",
      desc:"u need to got to temple to pray"},
      {
      sno:3,
      title:"go to home",
      desc:"u need to got to home to stay"
    },
  ]);

  
  return (
    <>
     <Header title="My todo list" searchBar={true}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
    
    </>
  );
}

export default App;
