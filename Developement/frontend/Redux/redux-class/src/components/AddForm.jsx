import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(task);
    dispatch(addTodo(task));// we need to give the specific "reducer func ,and what data(task) to be sent to "payload" "
    setTask(()=>(""));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <button>Add Task</button>
      </form>
    </>
  );
}

export default AddForm;
