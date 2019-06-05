import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-danger bg-danger mb-4 text-white">
                <div className="container">
                    <Link to="/">
                        <img src="../../donate-now-button.png" height="60px" width="60px" className="rounded"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <Link className="nav-link text-white" to="/about-us"> За нас
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/donation-categories"> Донациски категории
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