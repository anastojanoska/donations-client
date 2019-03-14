import React from 'react';
import Auxiliary from '../../../../hoc/Auxiliary';

const regOrg = () =>{

    let Text = {marginTop: "500px", width : "50%", height : "50%",backgroundColor : "#B01818",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}

    return (
        <Auxiliary style={{"margin-top": "500px"}}>
            <div className="form-group" style={Text}>
                <table>
                    <tr>
                        <td><label>Име на организација: </label></td>
                        <td><input/></td>
                    </tr>
                    <tr>
                        <td><label>Слика: </label></td>
                        <td><input/></td>

                    </tr>
                    <tr>
                        <td><label>Телефонски број: </label></td>
                        <td><input/></td>

                    </tr>
                    <tr>
                        <td><label>Е-маил: </label></td>
                        <td><input/></td>
                    </tr>
                    <tr>
                        <td><label>Лозинка: </label></td>
                        <td><input/></td>
                    </tr>
                    <tr>
                    <td><label>Категорија: </label></td>
                    <select>
                        <option>Образование-основно училиште</option>
                        <option>Образование-средно училиште</option>
                        <option>Образование-факултет</option>
                        <option>Болница</option>
                        <option>Институција</option>
                    </select>
                    </tr>


                </table>

                <button>Регистрирај се</button>
            </div>
        </Auxiliary>


    );

}

export default regOrg;