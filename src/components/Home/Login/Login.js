import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import classes from './Login.css';
import Button from '../../UI/Button/Button';
import {withRouter} from "react-router-dom";


const login = () =>{

    return (
        <Auxiliary >
            <div className={classes.Login}>
                <br/>
                <table >
                    <tbody>
                    <tr>
                        <td><label>Корисничко име:  </label></td>
                        <td><input className={classes.input}/></td>
                    </tr>
                    <tr>
                        <td><label>Лозинка:  </label></td>
                        <td><input className={classes.input}/></td>
                    </tr>
                    </tbody>
                </table>

                <Button clicked="">Логирај се</Button>
            </div>
        </Auxiliary>


    );

}

export default withRouter(login);