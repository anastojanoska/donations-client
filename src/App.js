import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Donations from './containers/Donations/Donations';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import {Route,Switch} from "react-router-dom";
import AboutUs from './components/Home/AboutUs/AboutUs';
import Layout from "./components/Layout/Layout";
import Login from "./components/Home/Login/Login";
import Register from "./components/Home/Register/Register";
import RegUser from "./components/Home/Register/RegUser/RegUser";
import RegOrg from "./components/Home/Register/RegOrganization/RegOrganization";


class App extends Component {

  render() {
      console.log(this.props);
      return (

          <div className={classes.App}>
              <Layout>
                  <Switch>
                      <Route path="/login" exact component={Login}/>
                      <Route path="/" exact component={Donations}/>
                      <Route path="/aboutus" exact component={AboutUs}/>
                      <Route path="/register" exact component={Register}/>
                      <Route path="/register/reguser" exact component={RegUser}/>
                      <Route path="/register/regorg" exact component={RegOrg}/>
                  </Switch>
              </Layout>
          </div>
      );
  }
}

export default App;
