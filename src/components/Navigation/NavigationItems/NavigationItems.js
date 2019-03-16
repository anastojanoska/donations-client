import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
/*import AboutUs from '../../Home/AboutUs/AboutUs';
import Login from '../../Home/Login/Login';
import Register from '../../Home/Register/Register';*/

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/aboutus" >About us</NavigationItem>
        <NavigationItem >Donation categories</NavigationItem>
        <NavigationItem link="/login" >Login</NavigationItem>
        <NavigationItem link="/register" >Register</NavigationItem>
    </ul>
);

export default navigationItems;