import React from 'react';


const regDon = () =>{

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

export default regDon;