import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import CommonInfo from './components/CommonInfo';
import NormActs from './components/NormActs';
import Orders from './components/Orders';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"



const App = ({history}) => {

  return (
    <Switch>
    <Route history={history} path='/home' component={MainPage} />
    <Route history={history} path='/commoninfo' component={CommonInfo} />
    <Route history={history} path='/normacts' component={NormActs} />
    <Route history={history} path='/orders' component={Orders} />
    <Route history={history} path='/commoninfo/info_2020' component={NormActs} />
    <Redirect from='/' to='/home'/>
    </Switch>


  );
}

export default withRouter(App);
