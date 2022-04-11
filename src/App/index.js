import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import history from '../history';
import './index.css';
import ResultPage from '../pages/ResultPage'
import TutorPage from '../pages/TutorPage';


const App = () => {
  return (
    <div className="container">

      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/tutor/:id' exact component={TutorPage} />
            <Route path='/result' exact component={ResultPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

// Client Id
// 787852599289-idj76rjibl8a6ogm1u2vu8nm18cjdjo6.apps.googleusercontent.com

