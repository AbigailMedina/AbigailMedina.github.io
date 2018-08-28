import React, { Component } from 'react';
// import './App.css';

import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import HomePage  from './views/HomePage'
import SchoolPage  from './views/SchoolPage'
import Hobbies  from './views/Hobbies'
import Experiences  from './views/Experiences'


class App extends Component {

render() {
    return (
      <HashRouter>
        <div>
          <Route 
            exact path="/" 
            component={HomePage} />
          <Route 
          exact path="/school" 
          component={SchoolPage} />
           <Route 
          exact path="/hobbies" 
          component={Hobbies} />
          <Route 
          exact path="/experiences" 
          component={Experiences} />
          </div>
      </HashRouter>
    )
  }

  
}

export default App;
