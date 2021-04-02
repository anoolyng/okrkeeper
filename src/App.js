import logo from './logo.svg';
import './App.css';

function App({login}) {
  return (
      <><div><p><h1>Hello {login}! Welcome to React</h1> <ul> Here are the list of things you need to do today:</ul>
          <li> Stand up code commit pipeline<input type={"checkbox"} checked/> </li>
          <li> Make sure when you make changes to your source code, they are committed to git hub <input type={"checkbox"} checked/></li>
          <li> New code changes are automatically copied to AWS S3 bucket and made available to users <input type={"checkbox"} checked/></li>
          <li> Create new Rest API <input type={"checkbox"} /></li>
        </p> </div></>
  );
}

export default App;
