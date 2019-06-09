import React, {Component} from 'react';
import OrganizationCategories from "./OrganizationCategories";
//import OrganizationsByCategory from "./OrganizationsByCategory";
import {getOrganizationsByCategoryId} from "../../repository/Organization";
import {getAllOrganizationCategories} from "../../repository/OrganizationCategory";
import OrganizationsByCategory from "./OrganizationsByCategory";

class OrganizationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organizations: [],
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
                this.setState({
                    categories: data
                })
            });
    };

    loadOrganizationsByCategory = (categoryId) => {
        getOrganizationsByCategoryId(categoryId)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    organizations: data
                })
            });
    };

    handleOrganizationCategorySelection = (selectedCategoryId) => {
        this.loadOrganizationsByCategory(selectedCategoryId);
    };


    render() {
        return (
            <div className="container">
                <OrganizationCategories categories={this.state.categories}
                                        onSelectCategory={this.handleOrganizationCategorySelection.bind(this)}/>
                {this.state.organizations &&
                 <OrganizationsByCategory organizations={this.state.organizations}/> // ovie props ne se prenesuvaat zatoa pagja
                }
            </div>
        );
    }
}

export default OrganizationsPage;
