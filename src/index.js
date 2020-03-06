import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// CSS
import './css/main.css';

// Views
import App from './App';
import Home from './views/Home';
import SignIn from './views/SignIn';
import Welcome from './views/Welcome';

const routing = (
  <Router>
    <div id="siteWrapper">
      <Route exact path="/" component={Home} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/Welcome" component={Welcome} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
