import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";
import { initialState, listReducer } from "../Reducers/reducers";

function ToDoList() {
  const [taskList, setTaskList] = useState({});

  const [newTask, setNewTask] = useState();

  const [state, dispatch] = useReducer(listReducer, initialState);

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <input
        className="new-task"
        type="text"
        name="createNewTask"
        value={newTask}
        onChange={handleChanges}
      />
      <button onClick={() => dispatch({ type: "ADD_TASK", payload: newTask })}>
        Add New Task
      </button>
      <h1>What Do You Have To Do?</h1>
      {state.item}
      {newTask.map(task => task.item)}
      <input
        className="far fa-edit"
        onClick={() => dispatch({ type: "EDIT_TASK" })}
      />
    </div>
  );
}

export default ToDoList;
