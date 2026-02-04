import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function TodoList() {
  const [todos, setTodos] = useState([
    { task: "sample", id: uuidv4(), isDone: false },
  ]); // as we are saving three informations , and it will be different for different tasks , so we are using array of objects.
  const [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((todos) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id)); // whenever this is triggered , a copy of entire todo list is made except for the element is was triggered.
  };

  let upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };

  let upperCaseOne = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      }),
    );
  };

  let isDoneOne = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        return todo.id == id ? { ...todo, isDone: !todo.isDone } : todo;
      }),
    );
  };

  let isDoneAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }),
    );
  };

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
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            {/*Understand why are we using arrow function (revise notes)*/}
            <button onClick={() => upperCaseOne(todo.id)}>upperCaseOne</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => isDoneOne(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCaseAll</button>&nbsp;&nbsp;&nbsp;
      <button onClick={isDoneAll}>isDoneAll</button>
    </div>
  );
}

export default TodoList;