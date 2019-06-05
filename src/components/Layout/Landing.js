import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-dark">
                    <div className="container">
                        <h1>Добредојдовте на донирај.мк!</h1>
                        <p>doniraj.mk е направена од двајца студенти на финки, со цел сите оние кои што сакаат да бидат
                            хумани и да донираат на оние кои што им е потребно.
                            Станува збор за организации, државни институции... кои што имаат потреба од најразлични
                            работи...
                            ......
                            бла бла...

                            Доколку сакате вашата организација да биде дел од нашата страна слободно контактирајте не.

                            Што треба да исполнувате за да бидете дел од doniraj.mk ?
                            -нешто
                            -нешто друго
                            -бла бла</p>
                        <img src="../../donate-now-button.png" className="mb-3"/> <br></br>
                        <Link className="btn btn-success mr-2" to="/login">Логирај се</Link>
                        <Link className="btn btn-success" to="/register">Регистрирај се</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Landing;