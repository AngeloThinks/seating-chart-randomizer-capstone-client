import React from "react";
import './App.css';
import {Switch, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Home from './components/pages/HomePage/Home';
import About from './components/pages/AboutPage/About';
import Profile from './components/pages/ProfilePage/Profile';
import Roster from "./components/pages/RosterPage/Roster";
import Footer from './components/pages/Footer/Footer';
import Form from "./components/pages/SignupPage/Form";



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/About' component={About}/>
        <Route path='/Roster' component={Roster}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Form' component={Form}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
