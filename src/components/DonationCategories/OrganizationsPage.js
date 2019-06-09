import React, {Component} from 'react';
import OrganizationCategories from "./OrganizationCategories";
import OrganizationsByCategory from "./OrganizationsByCategory";
import {getOrganizationsByCategoryId} from "../../repository/Organization";
import {getAllOrganizationCategories} from "../../repository/OrganizationCategory";

class OrganizationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organizations: [],
            category:"",
            categories: []
        }
    }

    componentDidMount() {
        this.loadOrganizationCategories();
    }

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
        return (
            <div className="container">
                <div className="row">
                    <OrganizationCategories categories={this.state.categories}/>
                </div>

            </div>
        );
    }
}

export default OrganizationsPage;