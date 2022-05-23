import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
    }
    return (
        <div className='register-background'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-container text-white'>
                        <h1 className='text-center text-4xl font-bold'>Please Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email Address</span>
                            </label>
                            <input type="email" placeholder="Enter Email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered" name='password' />
                        </div>
                        <p className='text-center'>Don't Have An Account? <Link to='/register' className='text-blue-500 underline'>Please Register</Link></p>

                        <div className='form-button'>
                            <button className="btn btn-primary">Login</button>
                        </div>

                    </div>
                </form>
            </div >
        </div>
    );
};

export default Register;