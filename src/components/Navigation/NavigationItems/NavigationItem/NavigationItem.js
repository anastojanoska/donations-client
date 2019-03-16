import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <div>
        <br/>
        <li className={classes.NavigationItem}>

               <strong>{props.children}</strong>

        </li>
        <br/>
    </div>
);

export default navigationItem;