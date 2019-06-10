import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../../donate-now-button.png";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-danger bg-danger  text-white">
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="" style={{width: "60px", height: "60px"}} className="rounded mr-2"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/about-us"> За нас
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/organizations"> Донирај
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/contact"> Контакт
                                </Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/register">Регистрирај се</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Логирај се</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
