import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Login.css';

const login = () =>{

        let Text = { width : "50%", height : "50%",backgroundColor : "#B01818",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}

    return (
        <Auxiliary style={{"margin-top": "500px"}}>
            <div className={classes.Login} style={Text}>
                <table >
                    <tr>
                        <td><label>Корисничко име:  </label></td>
                        <td><input/></td>
                    </tr>
                    <tr>
                        <td><label>Лозинка:  </label></td>
                        <td><input/></td>
                    </tr>
                </table>

                <button>Логирај се</button>
            </div>
        </Auxiliary>


    );

}

export default login;