import React, {Component} from 'react';
import {getOrganizationsByCategoryId} from "../../repository/Organization";

class OrganizationsByCategory extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps() {

    }

    render() {

        // console.log(this.props.organizations);

        const organizations = this.props.organizations
            .map((organization) => {
                return (
                    <tr>
                        <td>{organization.name}</td>
                        <td>{organization.phone}</td>
                        <td>
                            <button className="btn btn-info">Види потреби</button>
                        </td>
                    </tr>
                )
            });

        return (
            <div>
                {organizations}
            </div>
        );
    }
}

export default OrganizationsByCategory;
