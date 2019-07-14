import React from 'react';
import HomeScreen from "~/screens/Home";
import CategoryScreen from "~/screens/Category";
import CategoryDetail from '~/screens/CategoryDetail';
import withMobile from "~/components/Utils/withMobile";
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import './assets/css/app.scss';
import './assets/css/fix.scss';

const App = (props) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={HomeScreen} />
        <Route path={`/categories/:cat`} component={CategoryScreen} />
        <Route path={`/detail/:cat/:id`} component={CategoryDetail} />
      </BrowserRouter>
    </div>
  );
}

export default withMobile(App);
