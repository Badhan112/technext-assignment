import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Posts from './components/Posts/Posts/Posts';
import Profile from './components/Profile/Profile/Profile';
import UpdatePost from './components/Profile/UpdatePost/UpdatePost';
import NavBar from './components/Shared/NavBar/NavBar';
import SinglePost from './components/SinglePost/SinglePost/SinglePost';
import Users from './components/Users/Users/Users';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2')
      .then(res => res.json())
      .then(data => setUser(data));
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/'>
            <Posts />
          </Route>
          <Route path='/posts'>
            <Posts />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/post/:id'>
            <SinglePost />
          </Route>
          <Route path='/updatepost/:id'>
            <UpdatePost />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
