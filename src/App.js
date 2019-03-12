import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <div className="root">Hello! Parcel's React!</div>
    </Switch>
  </BrowserRouter>
);

export default App;
