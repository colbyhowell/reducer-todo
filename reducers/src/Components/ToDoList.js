import React, { useState, useReducer } from "react";
import { initialState, listReducer } from "../Reducers/reducers";
import Todo from "./ToDo";

function ToDoList() {
  const [newTask, setNewTask] = useState({
    item: "",
    complete: false,
    id: Date()
  });

  const [state, dispatch] = useReducer(listReducer, initialState);
  console.log(state);
  const handleChanges = e => {
    setNewTask({ ...newTask, item: e.target.value });
  };

  const toggleTask = v => {
    return dispatch({ type: "COMPLETE_TASK", payload: v });
  };

  const clearCompleted = v => {
    return dispatch({ type: "CLEAR_TASKS" });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: newTask });
    setNewTask({
      item: "",
      complete: false,
      id: Date()
    });
  };

  return (
    <div>
      <h1>What Do You Have To Do?</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-task"
          type="text"
          name="createNewTask"
          value={newTask.item}
          onChange={handleChanges}
        />
        <button type="submit">Add New Task</button>
        {state.map(task => {
          return (
            <Todo
              data={task}
              key={task.id}
              toggle={() => {
                toggleTask(task);
              }}
            />
          );
        })}
      </form>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default ToDoList;
