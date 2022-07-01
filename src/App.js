import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState({});
  
  console.log(user, 'user');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/albums">
            {/* <About /> */}
            <div>
              {user.username}
            </div>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <AuthPage setUser= {setUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
