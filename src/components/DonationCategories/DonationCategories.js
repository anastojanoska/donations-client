import React, {Component} from 'react';
import {Link} from "react-router-dom";

class DonationCategories extends Component {

    state = {
        category:""
    }


    onCategoryChanged = (e) =>{
        this.setState({
            category: e.currentTarget.value
        });
    }

    render() {
        var showCategory = <div> </div>;

        showCategory=(

            <div className="dark-overlay landing-inner text-dark w-100">

                        <table className="table table-bordered ">
                            <thead className="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Име на институција</th>
                                <th>Потреби</th>
                                <th>Контакт</th>
                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>

        );
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <h3 className="text-dark">Ве молиме одберете во која категорија сакате да ги видите потребите на институциите</h3>
                    </div>

                    <div className="row mt-3">
                        <div>
                            <input onChange={this.onCategoryChanged.bind(this)} type="radio" id="fiz" name="userType" value="fiz" />
                            <label htmlFor="obrazovanie" className="mr-3" >Образование</label>
                        </div>
                        <div>
                            <input onChange={this.onCategoryChanged.bind(this)}  type="radio" id="org" name="userType" value="org"/>
                            <label htmlFor="bolnici" className="mr-3" >Болници</label>
                        </div>
                        <div>
                            <input onChange={this.onCategoryChanged.bind(this)} type="radio" id="org" name="userType" value="org"/>
                            <label htmlFor="institucii">Институции</label>
                        </div>
                    </div>

                    <div className="row">
                        {showCategory}
                    </div>


                </div>
            </div>
        );
    }
}

export default DonationCategories;