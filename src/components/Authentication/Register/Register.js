import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import auth from "./../../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import LoadingSpinner from "./../../Shared/LoadingSpinner/LoadingSpinner";
import { toast } from "react-toastify";
import SocialMediaLogin from "./../SocialMediaLogin/SocialMediaLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  const [user] = useAuthState(auth);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.reset();

    await createUserWithEmailAndPassword(email, password);
    // await sendEmailVerification();
  };

  let displayError;
  if (error || error1) {
    displayError = (
      <p className="text-red-500 text-center">
        {" "}
        {error?.message} {error1?.message}
      </p>
    );
  }
  // if (user) {
  //   toast("Verification Email Sent!");
  // }
  if (loading || sending) {
    <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="register-background">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-container text-white">
            <h1 className="text-center text-4xl font-bold">Please Register</h1>
            {displayError}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <p className="text-center">
              Already Have An Account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Please Login
              </Link>
            </p>

            <div className="form-button">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </form>

        <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  );
};

export default Register;
