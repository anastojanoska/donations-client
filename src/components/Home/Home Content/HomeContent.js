import React, {Component} from 'react';
import Welcome from './Welcome/Welcome';
import Button from '../../../components/UI/Button/Button';
import classes from '../../../components/UI/Button/Button.css';
import Login from '../Login/Login';

class  HomeContent extends Component{

    state={
        loginClicked: false,
        registerClicked: false

    }

    loginClickedHandler = () => {
        this.setState({loginClicked: true});
    }

    registerClickedHandler = () => {
        this.setState({loginClicked: true});
    }

    render() {
        var show = <div>
                     <Welcome/>
            <Button clicked={this.loginClickedHandler}>LOGIN</Button>
            <Button clicked={this.registerClickedHandler}>REGISTER</Button>
            <button className={classes.Button} onClick={this.loginClickedHandler} style={{backgroundColor: "white", borderColor: "white"}}>Login</button>
            <button className={classes.Button} onClick={this.registerClickedHandler} style={{backgroundColor: "white", borderColor: "white"}}>Register</button>

        </div>
        if(this.state.loginClicked && !this.state.registerClicked)    {
            show = <Login/>
        }

        return (
            <div>
                {show}

            </div>

        );
    }
}

export default HomeContent;