import './App.css';
import AuthPage from './AuthPage';

function App() {
  const [user, setUser] = useState({});
  

  useEffect(() => {
    const user = cookies.get('session');
    if (user) {
      setUser(user);
    }
  })
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
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          <AuthPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
