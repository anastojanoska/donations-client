import React, {Component} from 'react';
import Welcome from './Welcome/Welcome';
import Button from '../../../components/UI/Button/Button';
import Login from '../Login/Login';
import Register from '../Register/Register';
import classes from './HomeContent.css';

class  HomeContent extends Component{

    state={
        loginClicked: false,
        registerClicked: false

    }

    loginClickedHandler = () => {
        this.setState({loginClicked: true});
        //this.props.history.push('/login');
    }

    registerClickedHandler = () => {
        this.setState({registerClicked: true});
        //this.props.history.push('/register');
    }

    render() {

        var show = <div>
                     <Welcome/>
                     <br/>
                     <br/>
                     <br/>
            <Button clicked={this.loginClickedHandler}> Логирај се </Button>
            <Button clicked={this.registerClickedHandler}> Регистрирај се </Button>

        </div>
        if(this.state.loginClicked && !this.state.registerClicked)    {
            show = <Login/>
        }
        else if(!this.state.loginClicked && this.state.registerClicked)    {
            show = <Register/>
        }

        return (
            <div className={classes.HomeContent} >
                {show}
            </div>

        );
    }
}

export default HomeContent;