import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {getOrganizationsByCategoryId} from "../../repository/Organization";
import axios from "axios";
import {getAllOrganizationCategories} from "../../repository/OrganizationCategory";


class OrganizationCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: [],
            category:"",
            categories: [],
            selectedCategoryIndex: 1
        }
    }

    componentDidMount() {
        this.loadOrganizationCategories();
    }


    onCategoryChanged = (id) =>{
        console.log(id);

        this.setState({
           // category: e.currentTarget.value
            selectedCategory: true
        });
        this.loadOrganizations(id);

    };

    loadOrganizations = (id) => {
        getOrganizationsByCategoryId(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data);
                this.setState({
                    organizations: data
                })
            });
    };

    loadOrganizationCategories = () => {
        getAllOrganizationCategories()
            .then(response => response.data)
            .then((data) => {
                console.log(data)
                this.setState({
                    categories: data
                })
            });
    };

    render() {
        var showCategory = <div> </div>;
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
        const categories = this.state.categories;
        console.log(categories);
        var catgs = categories.map((c) =>
            <div key={c.id}>
                <input onChange={this.onCategoryChanged(c.id)} type="radio" id={c.id} name="userType" value={c.name}/>
                <label htmlFor={c.name} className="mr-3" >{c.name}</label>
            </div>

        );

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

                    <div className="row mt-3">
                        {catgs}
                    </div>

                    <div className="row">

                    </div>


                </div>
            </div>
        );
    }
}

export default OrganizationCategories;
