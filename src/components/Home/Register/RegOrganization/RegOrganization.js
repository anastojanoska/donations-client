import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary';
import classes from './RegOrganization.css';
import Button from '../../../UI/Button/Button';


const regOrg = () =>{

    return (
        <Auxiliary style={{"margin-top": "500px"}}>
            <div className={classes.RegisterOrg}>
                <table>
                    <tbody>
                    <tr>
                        <td><label>Име на организација: </label></td>
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
                    <tr>
                        <td><label>Категорија: </label></td>
                        <select style={{margin: "10px"}}>
                            <option>Образование-основно училиште</option>
                            <option>Образование-средно училиште</option>
                            <option>Образование-факултет</option>
                            <option>Болница</option>
                            <option>Институција</option>
                        </select>
                    </tr>

                    </tbody>
                </table>

                <Button clicked="">Регистрирај се</Button>
            </div>
        </Auxiliary>


    );

}

export default regOrg;