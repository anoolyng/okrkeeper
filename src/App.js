import React from "react";
import Checkbox from './Checkbox.js';
import './App.css';

function App( {user, tasks} ) {
  return (
      <>
          <h1>Hello {user}! Welcome to React</h1>
          <p>Here is the list of things you need to do today:</p>
          <ul>
              {tasks.map((entry, i) => (
                  <li key={i}>
                      {entry.task}
                      <Checkbox tasks={tasks} entry={entry} index={i} />
                  </li>
              ))}
          </ul>
      </>
  );
}
export default App;
