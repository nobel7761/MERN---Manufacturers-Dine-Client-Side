import React, { useEffect, useRef } from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/useToken';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { toast } from 'react-toastify';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
    auth
  );

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (loading || gLoading || sending) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (error || gError || error1) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // event.reset.value()

    await signInWithEmailAndPassword(email, password);




  };




  const resetPassword = async () => {
    const email = emailRef.current.value;
    console.log("inside reset", email);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send email");
    } else {
      toast("Please enter your email address");
    }
  };

  return (
    <div className='login-background flex flex-col justify-center items-center'>

      <form onSubmit={handleSubmit} className='w-full'>
        <div className="w-3/4 mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" name='email' ref={emailRef} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' ref={passwordRef} className="input input-bordered" />
                  <label className="label">
                    <p>Don't Have An Account? <Link to='/register'><span className='text-primary'>Please Register</span></Link></p>
                  </label>
                  <label className="label">
                    <p>Forgot Password? <small className='text-primary cursor-pointer' onClick={resetPassword}>Reset Here</small></p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>


      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary"
      >Continue with Google</button>

    </div >
  );
};

export default Login;