import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from "../../assets/images/login/login.svg";


const Login = () => {
    const handleLogIn = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
    }
    return (
        <div>
                <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col grid md:grid-cols-2 lg:flex-row justify-between ">
          <div className="text-center lg:text-left ">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name='password'
                  className="input input-bordered"
                />
              </div>
              <div className="toggle-form">
                <p>Don't Have an Account? <Link className='text-yellow-600' to="/signup">Sign Up</Link>  </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;
