import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const taskList = [
    {"task": "Stand up code commit pipeline", "completed": true},
    {"task": "Make sure when you make changes to your source code, they are committed to git hub", "completed": true},
    {"task": "New code changes are automatically copied to AWS S3 bucket and made available to users", "completed": true},
    {"task": "Create new Rest API", "completed": false}
];

const user = "New Comer";

ReactDOM.render(
  <React.StrictMode>
    <App user={user} tasks={taskList}/>
  </React.StrictMode>,
  document.getElementById('root')
);