import React, { useState, useEffect } from 'react';
import Login from './pages/Login'
import Home from './pages/Home'
import AadharSearch from './pages/aadharSearch'
import VehicleSearch from './pages/vehicleSearch'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Navbar from './pages/Navbar';
import { auth } from './firebase'
function App() {
  const [user, setUser] = useState(null)
  const [currentPage, setCurrentPage] = useState("")
  let history = useHistory();
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      }
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (user === null) {
      setCurrentPage("/signin")
    }
    else {
      setCurrentPage("/home")
    }
  }, [user])
  const currentPageDisplay=()=>{
    return (currentPage==="/signin")?<Login />
    :<Home  />
  }
  useEffect(() => { }, [currentPage])
  return (
    <div className="app">
      <Router>
      {
        (user !== null) ? (<Navbar user={user} onChangeUser={(e) => { setUser(e); }} />) : (<></>)
      }
        <Switch>
          <Route path='/aadharSearch'><AadharSearch /></Route>
          <Route path='/vehicleSearch'><VehicleSearch /></Route>
          <Route excat path='/'>
            {currentPageDisplay}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
