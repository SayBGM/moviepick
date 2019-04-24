import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';

import store from './core/redux/store';

import Navi from './components/common/Navi';
import Main from './container/Main';

import './App.scss';
import MovieCompareMenu from './components/MovieCompare/MovieCompareMenu';
import classname from 'classnames';

const history = createBrowserHistory()


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoad: false
    }
  }
  componentDidMount() {
    const font = new FontFaceObserver('Nanum Square');
    font.load(null, 10000).then(() => {
      this.setState({fontLoad: true});
    })
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className={classname('Root', {'Root--fontLoading': this.state.fontLoad})}>
            <Navi />
            <Switch>
              <Route path="/" component={Main}/>
            </Switch>
            <MovieCompareMenu />
          </div>
        </Router>
      </Provider>
    );
  }
}
 
export default App;
