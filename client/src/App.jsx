import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import Home from './components/Home'
import Kanji from './components/Kanji';

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
            </Switch>
        </Router>
    </div>
  )
}

export default App
