// Pass the list of categories to this component from App. 
// Then, update this component to display <option> elements for each category 
// inside of the <select> element except the "All" category, so that the user can select a 
// category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.

// When the form is submitted, add a new task to the list with the text and category from the form. 
// For the tests for this feature to pass, you'll need a callback prop named onTaskFormSubmit that 
// takes a task object as an argument.
import React, { useState } from "react";

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;