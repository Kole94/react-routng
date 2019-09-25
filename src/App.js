import React from 'react';
import lsogo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1'
import { Comp2 } from './Components/Comp2'
import Questionnaire from './Components/Questionnaire'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import {PrivateRoute} from './Components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to='comp1'>A</Link></li>
          <li><Link to='comp2'>B</Link></li>
          <li><Link to='questionnaire'>c</Link></li>

        </ul>

        <Switch>
          <Route path='/comp1' exact component={Comp1} />
          <Route path='/questionnaire' component={Questionnaire} />

          <PrivateRoute path='/comp2' exact component={Comp2} />
        </Switch>
      </BrowserRouter>



    </div>
  );
}

export default App;
