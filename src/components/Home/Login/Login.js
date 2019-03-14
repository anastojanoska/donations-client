import React, {Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

class Login extends Component{

    render(){
        let Text = {marginTop: "500px", width : "50%", height : "50%",backgroundColor : "#B01818",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}

        return (
            <Auxiliary style={{"margin-top":"500px"}}>
                <div className="form-group" style={Text}>
                    <div>
                        <label>Username:</label>
                        <input/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input/>
                    </div>
                    <button>Login</button>
                </div>
            </Auxiliary>


        );

    }

}

export default Login;