import React, {Component} from 'react';
import {getAllOrganizations, getOrganizationsByCategoryId} from "../../repository/Organization";
//import OrganizationsByCategory from "./OrganizationsByCategory";
import DemandsByOrganization from "../Demands/DemandsByOrganization";
import {withRouter} from "react-router-dom";


class OrganizationCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            selectedCategoryId: "",
            organizations: [],
            orgsByCateg:"",
            allOrganizations:[],
            showAll:"",
            brojac: 0,
            showContent: true,
            organizationId:""

        }

    }



    onCategoryChanged = (e) => {

        //TOCNO SE PRENESUVAAT ORGANIZACIITE PO KATEGORIJA !!!!!
        this.setState({
           selected: true,
            selectedCategoryId: e.target.value
        }, () => {
            // console.log("ova e selektiranoto id ");
            // console.log(this.state.selectedCategoryId);
            // console.log("STATE NA SELECTED ");
            // console.log(this.state.selected);

            this.loadOrganizationsByCategory(this.state.selectedCategoryId);
        });
        // console.log("so ova id se povikuva funkcijata load ");
        // console.log(this.state.selectedCategoryId);
        // this.loadOrganizationsByCategory(this.state.selectedCategoryId);


    };

    loadOrganizationsByCategory = (categoryId) => {
        getOrganizationsByCategoryId(categoryId)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    organizations: data
                }, () => {
                    // console.log("ova e vo loadOrganizByCateg contentot na organizations ");
                    // console.log(this.state.organizations.content);
                    this.showOrganizationsByCategory(this.state.organizations.content);
                })
            });

    };

    showOrganizationsByCategory(organizationsContent){
        //console.log("SE POVIKUVA");
        var orgsByCateg1 = organizationsContent.map((org) => {
                return (

                            <tr key={org.id}>
                                <td>{org.id}</td>
                                <td>{org.name}</td>
                                <td>{org.phone}</td>
                                <td>
                                    <button className="btn btn-info" onClick={this.onVidiPotrebiClick.bind(this, org.id)}>Види потреби</button>
                                </td>
                            </tr>

                );})
            this.setState({orgsByCateg: orgsByCateg1});
    }

    loadAllOrganizations = () => {
        //console.log("SE POVIKUVA LOAD ALL");
        getAllOrganizations()
            .then(res => res.data)
            .then((data) => {
                this.setState({
                    allOrganizations: data
                }, () => {
                    this.showAllOrganizations(this.state.allOrganizations.content);
                    // console.log("ova e vo loadALL contentot na allOrganizations ");
                    // console.log(this.state.allOrganizations.content);
                })
            });

    }
    showAllOrganizations = (organizationsContent) => {
        var all = organizationsContent.map((org) => {
            return (

                <tr key={org.id}>
                    <td>{org.id}</td>
                    <td>{org.name}</td>
                    <td>{org.phone}</td>
                    <td>
                        <button className="btn btn-info" onClick={this.onVidiPotrebiClick.bind(this, org.id)} >Види потреби</button>
                    </td>
                </tr>

            );
        })
        this.setState({showAll: all});
    }

    onVidiPotrebiClick = (organizationId) => {
        console.log("SE POVIKUVA KLIKOT");
        var org = organizationId;
        this.setState({showContent: false, organizationId: organizationId});

    }

    render() {

        if(this.state.brojac === 0){
            this.loadAllOrganizations();
            this.setState({brojac: 1});
        }


        const categories = this.props.categories
            .map((category) => {
                return (
                    <div key={category.id}>
                        <input onChange={(e) => this.onCategoryChanged(e)} type="radio" id={category.id} name="userType"
                               value={category.id}/>
                        <label htmlFor={category.name} className="mr-3">{category.name}</label>
                    </div>
                )
            });

        //
        //  console.log("ova e pred return contentot na organizations ");
        //  console.log(this.state.organizations.content);
        //
        // console.log("ova e pred return contentot na allOrganizations ");
        // console.log(this.state.allOrganizations.content);

        //console.log(this.state.brojac);


        return (
            <div className="register">
                <div className="container">

                    {this.state.showContent === true ?
                        ( <div>
                            <div className="row">
                            <h3 className="text-dark">Ве молиме одберете во која категорија сакате да ги видите потребите на
                                институциите</h3>
                        </div>
                        <div className="row">
                            {categories}
                        </div>
                        <div className="row">
                        <div className="dark-overlay landing-inner text-dark w-100">
                        <table className="table table-bordered ">
                        <thead className="thead-light">
                        <tr>
                        <th>#</th>
                        <th>Име на институција</th>
                        <th>Контакт</th>
                        <th>Потреби</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.selected === false ? this.state.showAll : this.state.orgsByCateg }
                        {/* {this.state.orgsByCateg}
                                {this.state.showAll}*/}
                        </tbody>
                        </table>
                        </div>
                        </div>
                        </div>
                        )
                        :
                        <DemandsByOrganization organizationId={this.state.organizationId}/>
                    }




                </div>
            </div>
        );
    }
}

export default withRouter(OrganizationCategories);
