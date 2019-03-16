import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary';
import classes from './RegUser.css';
import Button from '../../../UI/Button/Button';

const regUser = () =>{


    return (
        <Auxiliary style={{"margin-top": "500px"}}>
            <div className={classes.RegisterUser}>
                <table>
                    <tbody>
                    <tr>
                        <td><label>Име: </label></td>
                        <td><input className={classes.input}/></td>
                    </tr>
                    <tr>
                        <td><label>Презиме: </label></td>
                        <td><input className={classes.input}/></td>
                    </tr>
                    <tr>
                        <td><label>Слика: </label></td>
                        <td><input className={classes.input}/></td>

                    </tr>
                    <tr>
                        <td><label>Телефонски број: </label></td>
                        <td><input className={classes.input}/></td>

                    </tr>
                    <tr>
                        <td><label>Е-маил: </label></td>
                        <td><input className={classes.input}/></td>
                    </tr>
                    <tr>
                        <td><label>Лозинка: </label></td>
                        <td><input className={classes.input}/></td>
                    </tr>

                    </tbody>
                </table>

                <Button clicked="">Регистрирај се</Button>
            </div>
        </Auxiliary>


    );

}

export default regUser;