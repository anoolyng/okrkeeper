import React from "react";
import TaskCheckbox from './TaskCheckbox.js';
import './App.css';

function App( {user, tasks} ) {
  return (
      <>
          <h1>Hello {user}! Welcome to React</h1>
          <p>Here is the list of things you need to do today:</p>
          <ul>
              {tasks.map((entry, i) => (
                  <li key={i}>
                      <label>
                          {entry.task}
                          <TaskCheckbox tasks={tasks} entry={entry} index={i} />
                      </label>
                  </li>
              ))}
          </ul>
      </>
  );
}
export default App;
