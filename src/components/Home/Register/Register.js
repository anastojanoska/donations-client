import React, {Component} from 'react';
import RegUser from './RegUser/RegUser';
import RegOrg from './RegOrganization/RegOrganization';
import Button from '../../UI/Button/Button';
import classes from './Register.css';


class Register extends Component{

    state = {
        regUserClicked: false,
        regOrganizationClicked: false
    }

    regUserClickedHandler = () => {
        this.setState({regUserClicked: true});
    }

    regOrganizationClickedHandler = () => {
        this.setState({regOrganizationClicked :true});
    }


    render(){
        var show = <div className={classes.Register}>

                    <Button clicked={this.regUserClickedHandler}>Физичко лице</Button>
                    <Button clicked={this.regOrganizationClickedHandler}>Организација</Button>
                </div>

        if(this.state.regUserClicked && !this.state.regOrganizationClicked){
            show = <RegUser/>
        }
        else if(!this.state.regUserClicked && this.state.regOrganizationClicked){
            show = <RegOrg/>
        }
        return(
            <div>
                {show}
            </div>

        );
    }
}

export default Register;
