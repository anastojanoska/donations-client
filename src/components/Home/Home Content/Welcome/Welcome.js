import React from 'react';
import classes from './Welcome.css';
import Auxiliary from '../../../../hoc/Auxiliary';

const welcome = (props) => {

    let Text = {width : "65%", height : "50%",backgroundColor : "white",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}
    let welcomeCSS = {height : "300px", width : "700px", align: "center",margin: "auto"}
    return(
        <Auxiliary >
            <div className={classes.Welcome} style={welcomeCSS} >
                <h1 >Добредојдовте на doniraj.mk!</h1>
                <div className={classes.Text} style={Text}>Оваа страна е наменета за сите оние кои што сакаат да бидат хумани и да донираат на оние кои што им е потребно.
                    Станува збор за организации, државни институции... кои што имаат потреба од најразлични работи...
                    ...
                </div>
            </div>
        </Auxiliary>

    );
}

export default welcome;