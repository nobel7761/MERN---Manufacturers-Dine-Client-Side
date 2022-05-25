import React from "react";
import "./Register.css";

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from "../../../Hooks/useToken";

import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Register = () => {

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (error || gError || updateError) {
    signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
  }

  if (token) {
    navigate('/home');
  }






  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log('update done');

  }




  return (
    <div className="register-background">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center pt-20">

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white text-xl">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: 'Name is Required'
                }
              })}
            />
            <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: 'Email is Required'
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email'
                }
              })}
            />
            <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-white text-xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: 'Password is Required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
                }
              })}
            />
            <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            </label>
          </div>

          {signInError}
          <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
        </form>

        <div className="flex flex-col items-center ">
          <p className="text-white py-2 text-lg"><small>Already have an account? <Link className='text-xl text-white underline' to="/login">Please login</Link></small></p>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-primary"
          >Continue with Google</button>
        </div>




      </div>
    </div>
  );
};

export default Register;
