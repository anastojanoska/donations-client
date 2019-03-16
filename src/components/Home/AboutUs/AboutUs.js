import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const welcome = (props) => {

    let Text = {width : "85%", height : "70%",backgroundColor : "white",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}
    let welcomeCSS = {height : "70%", width : "65%", align: "center",margin: "auto"}
    return(
        <Auxiliary >
            <div style={welcomeCSS} >
                <div  style={Text}>
                    doniraj.mk е направена од двајца студенти на финки, со цел сите оние кои што сакаат да бидат хумани и да донираат на оние кои што им е потребно.
                    Станува збор за организации, државни институции... кои што имаат потреба од најразлични работи...
                    ......
                    бла бла...

                    Доколку сакате вашата организација да биде дел од  нашата страна слободно контактирајте не.

                    Што треба да исполнувате за да бидете дел од doniraj.mk ?
                    -нешто
                    -нешто друго
                    -бла бла


                </div>
            </div>
        </Auxiliary>

    );
}

export default welcome;