import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* ------------------------------- COMPONENTS ------------------------------- */
import { Movie } from './components/Card'
import { Home } from './components/Home'


function App() {

  return (
    <Router>
      <div>
        <Switch>	

          <Route path="/movie/:id" component={ Movie } />
          <Route path="/" component={ Home } />

        </Switch>
      </div>
    </Router>
      );

}

export default App;
