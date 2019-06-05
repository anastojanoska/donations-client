import React from 'react';
import {withRouter} from "react-router-dom";


const login = () =>{

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Логирајте се</h1>
                        <p className="lead text-center">Логирајте се со вашиот акаунт</p>
                        <form className="mb-5">
                            <div className="form-group">
                                <input type="email" className="form-control form-control-lg" placeholder="Email Address"
                                       name="email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control form-control-lg" placeholder="Password"
                                       name="password"/>
                            </div>
                            <input type="submit" className="btn btn-success btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default withRouter(login);