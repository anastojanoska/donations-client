import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {getOrganizationsByCategoryId} from "../../repository/Organization";
import axios from "axios";
import {getAllOrganizationCategories} from "../../repository/OrganizationCategory";
import OrganizationsByCategory from "./OrganizationsPage";


class OrganizationCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organizations: [],
            category: ""
        }

    }



    onCategoryChanged = (e) =>{
        //console.log(e.target.value);
        this.setState({
           category: e.target.value
        });
    };

    loadOrganizations = (id) => {
        getOrganizationsByCategoryId(id)
            .then(response => response.data)
            .then((data) => {
                //console.log(data);
                this.setState({
                    organizations: data
                })
            });
    };


    render() {
        var showCategory = <div></div>;

        //  var orgs = <div> </div>

        // const organizations = this.state.organizations;
        // if ( this.state.selectedCategory === true) {
        //     orgs = organizations.map((o) =>
        //         <tr>
        //             <td>{o.name}</td>
        //             <td>{o.phone}</td>
        //             <td>
        //                 <button className="btn btn-info">Види потреби</button>
        //             </td>
        //         </tr>
        //     );
        // }
        const categs = this.props.categories;
        //console.log(categories);
        var catgs = categs.map((c) =>
            <div key={c.id}>
                <input onChange={this.onCategoryChanged.bind(this)} type="radio" id={c.id} name="userType"
                       value={c.name}/>
                <label htmlFor={c.name} className="mr-3">{c.name}</label>
            </div>
        );
        if (this.state.category === "Образование") {
                this.loadOrganizations(1);
        }
        else if(this.state.category === "Болници") {
            this.loadOrganizations(2);
        }
        else {
            this.loadOrganizations(3);
        }

        // showCategory=(
        //
        //     <div className="dark-overlay landing-inner text-dark w-100">
        //
        //                 <table className="table table-bordered ">
        //                     <thead className="thead-light">
        //                     <tr>
        //                         <th>#</th>
        //                         <th>Име на институција</th>
        //                         <th>Контакт</th>
        //                         <th>Потреби</th>
        //                     </tr>
        //                     </thead>
        //                     <tbody>
        //
        //                     </tbody>
        //                 </table>
        //             </div>
        //
        // );
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <h3 className="text-dark">Ве молиме одберете во која категорија сакате да ги видите потребите на институциите</h3>
                    </div>
                    <div className="row">
                        {catgs}
                    </div>
                    <div className="row">
                        <OrganizationsByCategory organizations={this.state.organizations}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default OrganizationCategories;
