
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import Header from './header';
import Home from './home';
import createGame  from './createGame';
import JoinQuiz from './joinQuiz';
import Quiz from './quiz';
import Footer from './footer';

const App = () => {


  return (
    <div>
      <Router>
        <Header />
        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/creategame" exact component={createGame} />
          <Route path="/join" exact component={JoinQuiz} />
          <Route path="/quiz/:id"  exact component={Quiz} />

        </Switch>
        <Footer/>
      </Router> 
     

    </div>
  );
}

export default App;
