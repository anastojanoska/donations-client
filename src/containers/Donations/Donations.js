import React, {Component} from 'react';
import HomeContent from '../../components/Home/Home Content/HomeContent';
import classes from './Donations.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import {withRouter} from "react-router-dom";

class Donations extends Component{

    render(){
        return(
            <div className={classes.Donations}>
                <Toolbar/>
                <HomeContent/>
                <div></div>


            </div>

        );
    }

}

export default withRouter(Donations);