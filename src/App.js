import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import jwt_decode from 'jwt-decode';


import Navbar from "./components/Layout/Navbar";
import Landing from "./components/Layout/Landing";
import Login from "./components/Home/Login/Login";
import Register from "./components/Home/Register/Register";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Layout/Footer";
//import RegUser from "./components/Home/Register/RegUser/RegUser";
import OrganizationCategories from "./components/DonationCategories/OrganizationCategories";
import Contact from "./components/Contact/Contact";
import UserProfile from "./components/Profile/UserProfile";


//ova se pravi za ako napravime refresh da ostaneme logirani
//check for token
// if(localStorage.jwtToken){
//         window.location.href = "/login";
//
// }


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
                  <Route exact path="/donation-categories" component={OrganizationCategories} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/user-profile" component={UserProfile} />
                  <Footer/>
              </div>
          </BrowserRouter>


      );
  }
}

export default App;
