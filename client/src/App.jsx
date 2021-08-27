import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Home from './components/Home'
import Kanji from './components/Kanji';
import Login from './components/Login';
import User from './components/User/User'

function App() {
  
  return (
    <div className="App">
        <Router>
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/kanji/:id">
                <Kanji />
            </Route> 
            <Route path="/user/:username">
                <User />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default App
