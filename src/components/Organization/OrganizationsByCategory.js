import React, {Component} from 'react';
//import {getOrganizationsByCategoryId} from "../../repository/Organization";

class OrganizationsByCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.setState({organizations: nextProps.organizations});
    }



    render() {
        console.log("ova e props.org.content");
        console.log(this.props.organizations.content);
        const organizations = this.props.organizations.content
            .map((org) => {
                return (
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
                            <tr>
                                <td>{org.name}</td>
                                <td>{org.phone}</td>
                                <td>
                                    <button className="btn btn-info">Види потреби</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
            });

        return (
            <div>
                <h1>SE POVIKUVA ORG BY CATEG</h1>
                {organizations}
            </div>
        );
    }
}

export default OrganizationsByCategory;
