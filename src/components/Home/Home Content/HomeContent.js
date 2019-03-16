import React, {Component} from 'react';
import Welcome from './Welcome/Welcome';
import Button from '../../../components/UI/Button/Button';
import classes from '../../../components/UI/Button/Button.css';
import Login from '../Login/Login';
import Register from '../Register/Register';

class  HomeContent extends Component{

    state={
        loginClicked: false,
        registerClicked: false

    }

    loginClickedHandler = () => {
        this.setState({loginClicked: true});
    }

    registerClickedHandler = () => {
        this.setState({registerClicked: true});
    }

    render() {
        var show = <div>
                     <Welcome/>
                     <br/>
            <Button clicked={this.loginClickedHandler}>ЛОГИРАЈ СЕ</Button>
            <Button clicked={this.registerClickedHandler}>РЕГИСТРИРАЈ СЕ</Button>
            <button className={classes.Button} onClick={this.loginClickedHandler} style={{backgroundColor: "#9F1B1B", borderColor: "#9F1B1B"}}>Логирај се</button>
            <button className={classes.Button} onClick={this.registerClickedHandler} style={{backgroundColor: "#9F1B1B", borderColor: "#9F1B1B"}}>Регистрирај се</button>
            <button className={classes.Button} onClick={this.registerClickedHandler} >Регистрирај се</button>

        </div>
        if(this.state.loginClicked && !this.state.registerClicked)    {
            show = <Login/>
        }
        else if(!this.state.loginClicked && this.state.registerClicked)    {
            show = <Register/>
        }

        return (
            <div style={{margin : "auto"}}>
                {show}

            </div>

        );
    }
}

export default HomeContent;