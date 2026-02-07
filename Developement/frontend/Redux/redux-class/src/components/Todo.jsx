import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos); // to access the data of "store" we use "useSelector"
  console.log(todos); // array of todos.
  
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  
  const taskDoneHandler = (id) => {
    dispatch(markAsDone(id));
    console.log(todos);
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            <button onClick={() => taskDoneHandler(todo.id)}>Done</button>
          </li>;
        })}
      </ul>
    </>
  );
}
