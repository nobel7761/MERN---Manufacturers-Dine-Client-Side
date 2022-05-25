import React from "react";
import "./Register.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import LoadingSpinner from "./../../Shared/LoadingSpinner/LoadingSpinner";
// import SocialMediaLogin from "./../SocialMediaLogin/SocialMediaLogin";
import { toast } from "react-toastify";
import useToken from "../../../Hooks/useToken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, loading1, error1] = useSignInWithGoogle(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);
  const [user] = useAuthState(auth);
  const [token] = useToken(user);
  const navigate = useNavigate();

  let displayError;
  if (error || error1 || error2) {
    displayError = (
      <p className="text-red-500 text-center"> Error: {error?.message}</p>
    );
  }

  if (token) {
    navigate("/");
  }

  if (loading || updating || loading1) {
    <LoadingSpinner></LoadingSpinner>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.reset();

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    // await sendEmailVerification();

    //sending information to database.
  };
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

        <div className="w-full flex justify-center">
          <button
            className="social-media-btn btn btn-outline mt-4 w-1/3"
            onClick={async () => {
              await signInWithGoogle();
            }}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-4" />
            GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
