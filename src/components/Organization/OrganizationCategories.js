import React, {Component} from 'react';

class OrganizationCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryId: ""
        }

    }

    onCategoryChanged = (e) => {
        this.setState(
            {selectedCategoryId: e.target.value},
            () => {
                // callback funkcija posle promenata na state, za da se izbegne bugot so prazen state na prv klik
                this.props.onSelectCategory(this.state.selectedCategoryId)
            }
        );
    };

    render() {

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
                        <h3 className="text-dark">Ве молиме одберете во која категорија сакате да ги видите потребите на
                            институциите</h3>
                    </div>
                    <div className="row">
                        {categories}
                    </div>
                </div>
            </div>
        );
    }
}

export default OrganizationCategories;
