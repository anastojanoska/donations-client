import React from 'react';
import classes from './Welcome.css';
import Auxiliary from '../../../../hoc/Auxiliary';

const welcome = (props) => {

   // let Text = {width : "65%", height : "50%",backgroundColor : "#9F1B1B",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}
    //let welcomeCSS = {height : "70%", width : "65%", align: "center",margin: "auto"}
    return(
        <Auxiliary >
            <div className={classes.Welcome}  style={{marginTop:"100px"}}>
                <br/>
                <h1 >Добредојдовте на doniraj.mk!</h1>
                <br/>
                <div className={classes.Text} >Оваа страна е наменета за сите оние кои што сакаат да бидат хумани и да донираат на оние кои што им е потребно.
                    Станува збор за организации, државни институции... кои што имаат потреба од најразлични работи...
                    ......
                </div>
            </div>
        </Auxiliary>

    );
}

export default welcome;