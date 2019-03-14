import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const login = () =>{

        let Text = {marginTop: "500px", width : "50%", height : "50%",backgroundColor : "#B01818",align:"center",margin: "auto", border: "3px solid black", textAlign: "center"}

    return (
        <Auxiliary style={{"margin-top": "500px"}}>
            <div className="form-group" style={Text}>
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