import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import AboutUs from '../../Home/AboutUs/AboutUs';
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem >About us</NavigationItem>
        <NavigationItem >Donation categories</NavigationItem>
        <NavigationItem >Login</NavigationItem>
        <NavigationItem >Register</NavigationItem>
    </ul>
);

export default navigationItems;