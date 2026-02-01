import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
function TodoList() {
  const [todos, setTodos] = useState([{task:"sample",id:uuidv4()}]); // as we are saving two informations we are using array of objects
  const [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((todos)=>{
        return [...todos, {task:newTodo,id:uuidv4()}];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo=(id)=>{
    setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id)); // when ever this is triggered , a copy of entire todo list is made except for the element is was triggered.
  }

  return (
    <div>
      <h1>ToDo-ReactApp</h1>
      <input
        placeholder="Enter your task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>~~~Task Todo~~~</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button> {/*Understand why are we using arrow function (revise notes)*/ }
           </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
