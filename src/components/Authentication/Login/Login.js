import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);

  if (user) {
    navigate("/");
  }

  let displayError;
  if (error || error1) {
    displayError = (
      <p className="text-red-500 text-center"> Error: {error?.message}</p>
    );
  }
  if (loading || sending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    event.target.reset();

    await signInWithEmailAndPassword(email, password);

    console.log(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send email");
    } else {
      toast("Please enter your email address");
    }
  };
  return (
    <div className="login-background">
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="form-container text-white">
            <h1 className="text-center text-4xl font-bold">Please Login</h1>
            {displayError}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email Address</span>
              </label>
              <input
                ref={emailRef}
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
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>

            <p className="text-center">
              Forget Password?{" "}
              <span
                className="text-blue-500 underline cursor-pointer"
                onClick={resetPassword}
              >
                Click Here
              </span>
            </p>

            <p className="text-center">
              Don't Have An Account?{" "}
              <Link to="/register" className="text-blue-500 underline">
                Please Register
              </Link>
            </p>

            <div className="form-button">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>

        <SocialMediaLogin></SocialMediaLogin>
      </div>
    </div>
  );
};

export default Login;
