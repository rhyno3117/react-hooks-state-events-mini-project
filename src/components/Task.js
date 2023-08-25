//Update the Task component so that it shows the task's text and category.
//When the delete button is clicked, the task should be removed from the list.

import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleClick() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
