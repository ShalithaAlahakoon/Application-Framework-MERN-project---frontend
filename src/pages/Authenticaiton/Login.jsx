import React from 'react'
import Header from '../../components/Header'
import './js/login'

function Login() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header text-center">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form action="/home" className='needs-validation' noValidate>
                  
                  <div className="form-group" >
                    <label for="validationCustom01" className="form-label">User name</label>
                    <input type="text" className="form-control" id="validationCustom01"  required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id='password' name='password' required />
                  </div>
                  <div className='d-flex justify-content-center mt-2'>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center">
                  <a href="/register">Don't have an account?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Login
