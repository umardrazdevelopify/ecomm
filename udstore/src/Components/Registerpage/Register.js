import React from "react";
import { useState } from "react";
import axios from 'axios'
const Register = () => {
    const [Registerinput, setRegisterinput] = useState({
    'name':'',
    'email':'',
    'password':'',
    })
    const handleInput = (e) =>{
        e.persist();
        setRegisterinput({...Registerinput, [e.taget.name]:e.taget.value});
    }
function Registration(e) {
    e.preventDefault();
    const Data = {
        name:Registerinput.name,
        email:Registerinput.email,
        password:Registerinput.password,
    }
    axios.post(`/api/register`, Data).then(res=>{
        
    })
}
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-1">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-0 mt-4">
                      Register
                    </p>

                    <form className="mx-1 mx-md-2" onSubmit={Registration}>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label"
                            for="form3Example1c"
                          
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="name"
                            onChange={handleInput}
                            value ={Registerinput.name}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            name="email"
                            onChange={handleInput}
                            value ={Registerinput.email}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="password"
                            onChange={handleInput}
                            value ={Registerinput.password}
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex  mb-2">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex  mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-dark btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
