import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, browserHistory, Switch } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Navi from './components/common/Navi';
import MainContents from './components/common/MainContents';

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(createBrowserHistory(), store)

class App extends Component {
  render() { 
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="">
            <Navi />
            <MainContents />
            <Switch>
              
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
 
export default App;