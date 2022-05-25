import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import "./SocialMediaLogin.css";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const SocialMediaLogin = () => {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  let displayError;
  if (error) {
    displayError = <p className="text-danger"> {error?.message}</p>;
  }

  if (loading) {
    <LoadingSpinner></LoadingSpinner>;
  }

  useEffect(() => {
    if (user) {
      console.log("social user", user);
      const createUser = {
        username: user?.displayName,
        email: user?.email,
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
    }
  }, [user, navigate]);

  const googleSignIn = async () => {
    await signInWithGoogle();
  };

  return (
    <div className="container social-logo">
      {displayError}
      <button
        className="social-media-btn btn btn-outline mt-4 w-1/2"
        onClick={googleSignIn}
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-4" />
        GOOGLE
      </button>
    </div>
  );
};

export default SocialMediaLogin;
