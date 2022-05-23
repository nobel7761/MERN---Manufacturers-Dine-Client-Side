import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect } from "react";
import "./SocialMediaLogin.css";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import auth from "../../../firebase.init";

const SocialMediaLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  const navigate = useNavigate();
  // const location = useLocation();
  // const [token] = useToken(user)

  // let from = location.state?.from?.pathname || "/";

  let displayError;
  if (error) {
    displayError = <p className="text-danger"> {error?.message}</p>;
  }

  if (loading) {
    <LoadingSpinner></LoadingSpinner>;
  }

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const googleSignIn = async () => {
    await signInWithGoogle();
    navigate("/");
  };
  const facebookSignIn = async () => {
    await signInWithFacebook();
    navigate("/");
  };

  return (
    <div className="container social-logo">
      {displayError}
      <button
        size="lg"
        className="w-25 social-media-btn btn btn-outline mt-4 mr-4"
        onClick={googleSignIn}
      >
        <FontAwesomeIcon icon={faGoogle} className="mr-4" />
        GOOGLE
      </button>
      <button
        size="lg"
        className="w-25 social-media-btn btn btn-outline mt-4"
        onClick={facebookSignIn}
      >
        <FontAwesomeIcon icon={faFacebook} className="mr-4" />
        FACEBOOK
      </button>
    </div>
  );
};

export default SocialMediaLogin;
