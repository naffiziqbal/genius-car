import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/Authprovider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, googleLogIn } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl= form.photoUrl.value 
    console.log(photoUrl);
    

    createUser(email, password, name)
      .then((result) => {
        const user = result.user
        navigate("/")
        handleUserInfo(name,photoUrl)
      })
      .catch((err) => console.log(err))
  };
  const handleUserInfo = (name,photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl,
    }
    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // Google Log IN
  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content w-full flex-col grid md:grid-cols-2 lg:flex-row justify-between ">
          <div className="text-center lg:text-left ">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URl</span>
                </label>
                <input
                  type="url"
                  placeholder="photoUrl"
                  name="photoUrl"
                  className="input input-bordered"
                />
                </div>

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="toggle-form">
                <p>
                  Already Have an Account?{" "}
                  <Link className="text-yellow-600" to="/login">
                    Log in
                  </Link>{" "}
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <hr />
            <div className="text-center">
              <button
                className="p-3 border border-slate-300 w-full hover:bg-slate-500 hover:text-white duration-300 hover:rounded-b-lg"
                onClick={handleGoogleLogin}
              >
                Log in Using Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
