import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section style={{backgroundColor: "#9A616D"}}>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center ">
        <div class="col col-xl-10">
          <div class="card" style={{borderRadius: "1rem"}}>
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 loginimage d-none d-md-block">
              
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body py-1 px-4 py-lg-2 text-black">
  
                  <form>
  
                    <div class="d-flex justify-content-center align-items-center mb-3 pb-1">
                      <span class="h1 fw-bold  mb-0">Login</span>
                    </div>
  
                    
  
                    <div class="form-outline mb-2">
                    <label class="form-label" for="form2Example17">Email address</label>
                      <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    
                    </div>
  
                    <div class="form-outline mb-2">
                    <label class="form-label" for="form2Example27">Password</label>
                      <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    
                    </div>
  
                    <div class="pt-1 mb-2">
                      <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                    </div>
  
                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <p class="mb-2 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link to="/register"
                    style={{color: "#393f81"}}>Register here</Link></p>
                  
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Login