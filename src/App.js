import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";


/*import logo from './logo.svg';
import classes from './App.css';
import Donations from './containers/Donations/Donations';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
//import {Route,Switch} from "react-router-dom";
import AboutUs from './components/Home/AboutUs/AboutUs';
import Layout from "./components/Layout/Layout";
import Login from "./components/Home/Login/Login";
import Register from "./components/Home/Register/Register";
import RegUser from "./components/Home/Register/RegUser/RegUser";
import RegOrg from "./components/Home/Register/RegOrganization/RegOrganization";*/
import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import Login from "./components/Home/Login/Login";
import Register from "./components/Home/Register/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Layout/Footer";
//import RegUser from "./components/Home/Register/RegUser/RegUser";
import DonationCategories from "./components/DonationCategories/DonationCategories";


class App extends Component {

  render() {

      return (
          <BrowserRouter>
              <div className="App">
                      <Navbar/>
                      <Route exact path="/" component={Landing}/>
                      <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/about-us" component={AboutUs} />
                  <Route exact path="/donation-categories" component={DonationCategories} />
                  <Footer/>
              </div>
          </BrowserRouter>


      );
  }
}

export default App;
