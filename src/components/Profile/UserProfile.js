import React, {Component} from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: this.props.email,
            donations:this.props.donations,
            img:this.props.img,
            points:this.props.points
        }



    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-info ">Edit Profile</button>
                </div>
                <div className="row">
                    <h3>Ана Стојаноска</h3><br></br>
                </div>
                <div className="row">
                    <p>E-mail: ana@ana.com</p>
                </div>
                <div className="row">
                    <p>Поени: 13</p>
                </div>
                <div className="row">
                    <h5>Мои донации</h5>
                </div>
                <div className="row">
                    <table className="table table-bordered ">
                        <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Име на институција</th>
                            <th>Што</th>
                            <th>Колку</th>
                            <th>Поени</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserProfile;