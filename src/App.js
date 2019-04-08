import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, browserHistory, Switch } from 'react-router-dom';

import store from './core/redux/store';

import Navi from './components/common/Navi';
import Main from './container/Main';

import './App.scss';


const history = createBrowserHistory()

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="Root">
            <Navi />
            <Switch>
              <Route path="/" component={Main}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
 
export default App;
