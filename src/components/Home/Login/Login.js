import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
//import axios from 'axios';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password:'',

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //da ne moze da odime na '/login' ako veke sme logirani
    /*componentDidMount() {
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/');
        }
    }*/

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.loginUser(userData);
    }
/*
    //Login - get user token
     loginUser (userData) {
        axios.post('/api/users/login', userData)
            .then(res => {
                console.log(res);
                //save to localStorage
             //   const token = res.data.token;
                //set token to localStorage
                //ls prima samo stringovi
             //   localStorage.setItem('jwtToken',token);
                //set token to auth header
            //    setAuthToken(token);
                //decode token to get user data
            //    const decoded = jwt_decode(token);
                //set current user
             //   setCurrentUser(decoded);
                this.props.history.push("/");
            })
            .catch(err =>
                console.log(err)
            );
    }

//set logged in user
    setCurrentUser(dec) {

    }
*/
// //log user out
//     logoutUser (){
//         //remove token from localStorage
//         localStorage.removeItem('jwtToken');
//         //remove auth header for future requests
//         setAuthToken(false);
//         //set current user to {} which will set isAuthenticated to false
//         setCurrentUser({});
//     };



    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Логирајте се</h1>
                            <p className="lead text-center">Логирајте се со вашиот акаунт</p>
                            <form className="mb-5" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="email" onChange={this.onChange} value={this.state.email} className="form-control form-control-lg" placeholder="Email Address"
                                           name="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={this.onChange} value={this.state.password} className="form-control form-control-lg" placeholder="Password"
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
}

export default withRouter(Login);

