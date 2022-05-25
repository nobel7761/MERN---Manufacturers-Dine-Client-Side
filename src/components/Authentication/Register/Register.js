import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import auth from "./../../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import LoadingSpinner from "./../../Shared/LoadingSpinner/LoadingSpinner";
import SocialMediaLogin from "./../SocialMediaLogin/SocialMediaLogin";
import { toast } from "react-toastify";

const Register = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.reset();
    // setDisplayName(displayName);

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    // await sendEmailVerification();

    //sending information to database.
    const createUser = {
      username: displayName,
      email: email,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Registered Successfully!");
      });
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

  if (loading || updating) {
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
                name="displayName"
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
              <button className="btn btn-primary w-1/2">Register</button>
            </div>
          </div>
        </form>

        <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  );
};

export default Register;
