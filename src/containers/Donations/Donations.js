import React, {Component} from 'react';
import HomeContent from '../../components/Home/Home Content/HomeContent';
import classes from './Donations.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


class Donations extends Component{



    render(){
        return(
            <div style={{"backgroundColor" : "white","height" : "100%","width" : "100%"}}  className={classes.Donations}>

                <Toolbar/>
                <HomeContent/>
                <div></div>


            </div>

        );


    }

}

export default Donations;