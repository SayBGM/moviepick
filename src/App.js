import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

const App = () => (
  // <Provider>
  <BrowserRouter>
    <Switch>
      <div className="root">Hello! Parcel's React!</div>
    </Switch>
  </BrowserRouter>
  // </Provider>
);

export default App;
