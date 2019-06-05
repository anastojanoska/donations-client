import React from 'react';


const regOrg = () =>{

    return (
        <div className="col-md-8 m-auto mb-5">
            <h1 className="display-4 text-center">Регистрирај се</h1>
            <p className="lead text-center">Креирајте го вашиот акаунт</p>
            <form className="mb-5">
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Ime na organizacijata"
                           name="name" required/>
                </div>
                <div className="form-group">
                    <p>Категорија во која што припаѓате:</p>
                    <select type="text" className="form-control form-control-lg" placeholder="kategorija" name="name"
                            required>
                        <option value="obrazovanie">Образование</option>
                        <option value="bolnica">Болница</option>
                        <option value="institucija">Институција</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Telefonski broj"
                           name="name" required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Addresa"
                           name="email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Lozinka"
                           name="password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Potvrdi lozinka"
                           name="password2"/>
                </div>
                <input type="submit" className="btn btn-success btn-block mt-4"/>
            </form>
        </div>


    );

}

export default regOrg;