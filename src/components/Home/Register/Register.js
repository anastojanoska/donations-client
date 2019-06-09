import React, {Component} from 'react';
//import {withRouter} from "react-router-dom";
//import {Link} from "react-router-dom";

import RegUser from './RegUser/RegUser';
import RegOrgPr from './RegOrganization/RegOrgPrimac';
import RegOrgDon from './RegOrganization/RegOrgDonator';

class Register extends Component{

    state = {
        userType:"",
        orgType: ""
    }


    onUserTypeChanged = (e) =>{
    this.setState({
        userType: e.currentTarget.value
    });
    }

    onOrgTypeChanged = (e) =>{
        this.setState({
            orgType: e.currentTarget.value
        });
    }



    render(){


        var show = <div> </div>;
        var showOrgType =<div> </div>;

        if(this.state.userType === "fiz" ){
            show = <RegUser/>;
            showOrgType =<div> </div>;
        }

        else if(this.state.userType === "org"){
            show = <div className="container">
                <div className="row w-50">
                    <h3>Одберете дали сакате да донирате или да примате донации</h3>
                </div>
                <div className="row mt-3">
                    <div>
                        <input onChange={this.onOrgTypeChanged.bind(this)} type="radio" id="fiz" name="orgType" value="donator" />
                        <label htmlFor="donator" className="mr-3" >Донатор</label>
                    </div>
                    <div>
                        <input onChange={this.onOrgTypeChanged.bind(this)} type="radio" id="org" name="orgType" value="primac"/>
                        <label htmlFor="primac">Примач</label>
                    </div>
                </div>
                </div>

        }

        if (this.state.orgType === "primac"){
            showOrgType=<RegOrgPr/>;
        }
        if(this.state.orgType === "donator"){
            showOrgType=<RegOrgDon/>;
        }
        return(
            <div className="register mb-5">
                <div className="container">
                    <div className="row w-50">
                        <h3>Одберете дали сакате да се регистрирате како физичко лице или како дел од некоја организација</h3>
                    </div>
                    <div className="row mt-3">
                        <div>
                            <input onChange={this.onUserTypeChanged.bind(this)} type="radio" id="fiz" name="userType" value="fiz" />
                            <label htmlFor="fiz" className="mr-3" >Физичко лице</label>
                        </div>
                        <div>
                            <input onChange={this.onUserTypeChanged.bind(this)} type="radio" id="org" name="userType" value="org"/>
                            <label htmlFor="org">Организација</label>
                        </div>
                    </div>
                    <div className="row">
                        {show}
                    </div>
                    <div className="row">
                        {showOrgType}
                    </div>

                </div>

            </div>

        );
    }
}


export default Register;
