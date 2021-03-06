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
import Register from './components/Register';
import User from './components/User/User'
import UserList from './components/User/List'
import Add from './components/Kanji/Add';
import Profile from './components/User/Profile';
import KanaHome from './components/Kana/Home';
import MachiHome from './components/Machi/Home';
import AddMachi from './components/Machi/Add';
import Machi from './components/Machi/Machi';

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
            <Route path="/machi/:id">
                <Machi />
            </Route>
            <Route path="/users">
                <UserList />
            </Route> 
            <Route path="/user/:username">
                <User />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route> 
            <Route path="/api/kanji/add">
                <Add />
            </Route>
            <Route path="/api/machi/add">
                <AddMachi />
            </Route>
            <Route path="/kana">
                <KanaHome />
            </Route>
            <Route path="/machi">
                <MachiHome />
            </Route>
            </Switch>
        </Router>
    </div>
  )
}

export default App
