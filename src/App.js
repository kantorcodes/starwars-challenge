import React from 'react';
import HomeScreen from "~/screens/Home";
import CategoryScreen from "~/screens/Category";
import { Route } from 'react-router-dom'
import './assets/css/app.scss';
import './assets/css/fix.scss';

const App = _ => {
  return (
    <div className="app">
      <Route exact path="/" component={HomeScreen} />
      <Route path={`/categories/:cat`} component={CategoryScreen} />
    </div>
  );
}

export default App;
