import React, {Component} from 'react';
import RegUser from './RegUser/RegUser';
import RegOrg from './RegOrganization/RegOrganization';

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
        var show = <div>
                    <button onClick={this.regUserClickedHandler}>Физичко лице</button>
                    <button onClick={this.regOrganizationClickedHandler}>Организација</button>
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
