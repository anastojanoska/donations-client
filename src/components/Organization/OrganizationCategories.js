import React, {Component} from 'react';
import {getOrganizationsByCategoryId} from "../../repository/Organization";
import OrganizationsByCategory from "./OrganizationsByCategory";


class OrganizationCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            selectedCategoryId: "",
            organizations: [],
            orgsByCateg:""
        }

    }
    // componentDidUpdate(prevProps, prevState) {
    //
    //     console.log("so ova id se povikuva funkcijata load ");
    //     console.log(this.state.selectedCategoryId);
    //     this.loadOrganizationsByCategory(this.state.selectedCategoryId);
    // }

    onCategoryChanged = (e) => {
        //ova e na dimsa dole, ke go iskomentiram
       /* this.setState(
            {selectedCategoryId: e.target.value},
            () => {
                // callback funkcija posle promenata na state, za da se izbegne bugot so prazen state na prv klik
                this.props.onSelectCategory(this.state.selectedCategoryId)
            }
        );*/

       //ova e na ana proba
        //TOCNO SE PRENESUVAAT ORGANIZACIITE PO KATEGORIJA !!!!!
        this.setState({
           selected: true,
            selectedCategoryId: e.target.value
        }, () => {
            console.log("ova e selektiranoto id ");
            console.log(this.state.selectedCategoryId);
            console.log("STATE NA SELECTED ");
            console.log(this.state.selected);

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
                    console.log("ova e vo loadOrganizByCateg contentot na organizations ");
                    console.log(this.state.organizations.content);
                    this.showOrganizationsByCategory(this.state.organizations.content);
                })
            });

    };

    showOrganizationsByCategory(organizationsContent){
        console.log("SE POVIKUVA");
        var orgsByCateg1 = organizationsContent.map((org) => {
                return (

                            <tr>
                                <td>{org.id}</td>
                                <td>{org.name}</td>
                                <td>{org.phone}</td>
                                <td>
                                    <button className="btn btn-info">Види потреби</button>
                                </td>
                            </tr>

                );})
            this.setState({orgsByCateg: orgsByCateg1});
    }

    render() {
        console.log("STATE NA SELECTED ");
        console.log(this.state.selected);

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


         console.log("ova e pred return contentot na organizations ");
         console.log(this.state.organizations.content);


        return (
            <div className="register">
                <div className="container">
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
                                    {this.state.orgsByCateg}
                                </tbody>
                            </table>
                        </div>
                        {/*
                            { !this.state.organizations ?
                            ( <OrganizationsByCategory organizations={this.state.organizations}/> )
                            : null
                        }
                        */}
                    </div>
                </div>
            </div>
        );
    }
}

export default OrganizationCategories;
