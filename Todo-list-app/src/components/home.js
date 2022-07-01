
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import { GrNotes } from 'react-icons/all';
import { MdNotificationsActive } from 'react-icons/all';
import { useState } from "react";
import React from 'react';






function Home(){
  const [todos, setTodos] = useState([]);

const addTodo = (text) => {

  const todo = {
    id: new Date().getTime(), 
    text: text, 
    completed: false, 
    important: false
  }
  const newTodos = [todo, ...todos]
  setTodos(newTodos)
};

const removeTodo = (id) => {
  const updatedTodos = [...todos].filter((todo) => todo.id !== id);
  setTodos(updatedTodos);
};

const completeTodo = (id) => {
  const updatedTodos = todos.map((todo) => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  setTodos(updatedTodos)
}

const importantTodo = (id) => {
  const updatedTodos = todos.map((todo) => {
    if(todo.id === id) {
      todo.important = !todo.important
    }
    return todo
  })

  setTodos(updatedTodos)
}
const sortedTodos = todos.sort((a, b) => b.important - a.important)
    return(
        <div className="todo-app">
        <h1><u><i><GrNotes className="logo"/></i></u></h1>
        <h3><i>Enter your Todo lists below and click the  "<MdNotificationsActive className="notification"/>" icon to set top priority</i></h3><br></br>
        <TodoForm addTodo={addTodo} />
        
        {sortedTodos.map((todo) => {
          return (
            <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
          )
        })}
      </div>
    )
}

export default Home;