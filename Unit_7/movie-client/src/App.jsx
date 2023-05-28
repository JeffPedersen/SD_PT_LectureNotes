import './App.css';
import Auth from './components/auth/Auth';
import MovieIndex from './components/movie/MovieIndex';
import MovieEdit from './components/movie/MovieEdit';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Logout from './components/auth/logout/Logout';


function App() {
  // Use useState to house token 
  const [ sessionToken, setSessionToken ] = useState('') 
  //console.log('app.jsx:', sessionToken)

  const updateToken = newToken => {
    localStorage.setItem("token", newToken); 
    // ^ .setItem(key, value)
    setSessionToken(newToken);
  }

    // Use useEffect so the session token will not be reset if the page refreshes 
    useEffect(() => { // if page refreshes get token from local & keep session
      if(localStorage.getItem('token')) { 
        setSessionToken(localStorage.getItem('token'))
      }
    }, []) // [] means this can happen on multiple times (refresh or page change)
  // Create routing using the Routes tag with the route tags holding the individual components/view
  // Add logout so it is visible ONLY when there is a a session token

  return (
    <div className="App">
      {
        sessionToken !== "" ?
        <Logout setToken={setSessionToken}/> :
        null
      }
      <Routes>
        <Route
          path='/'
          element={<Auth updateToken={updateToken}/>}
          />
        <Route
          path='/movie'
          element={<MovieIndex token={sessionToken}/>}
          />
        <Route
          path="/movie/update/:id"
          element={<MovieEdit token={sessionToken} />}
          />
      </Routes>
    </div>
  );
}

export default App;
