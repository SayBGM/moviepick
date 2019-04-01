import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, browserHistory, Switch } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Navi from './components/common/Navi';
import MainContents from './components/common/MainContents';
import MoviePoster from './components/common/MoviePoster';

import './App.scss';

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
          <div className="Root">
            <Navi />
            <MainContents>
                <Switch>
                  <Route
                    path="/"
                    component={Test}
                  />
                </Switch>
            </MainContents>
            <Switch>
              
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
 
export default App;

const Test = () => (
  <React.Fragment>
    <MoviePoster
      type="main"
      imgSrc={require('./assets/testPoster.jpg')}
    />
    <MoviePoster
    type="main"
    imgSrc={require('./assets/testPoster.jpg')}
  />
  <MoviePoster
    type="main"
    imgSrc={require('./assets/testPoster.jpg')}
  />
  <MoviePoster
    type="main"
    imgSrc={require('./assets/testPoster.jpg')}
  />
  <MoviePoster
    type="main"
    imgSrc={require('./assets/testPoster.jpg')}
  />
  <MoviePoster
    type="main"
    imgSrc={require('./assets/testPoster.jpg')}
  />
  </React.Fragment>
)
