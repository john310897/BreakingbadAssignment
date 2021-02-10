import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className='container' width='100%'>
            <h1 align='center'>Breaking Bad Characters</h1>
            <input type='text' className='form-control' id='username' placeholder='Username'/><br/>
            <input type='password' className='form-control' id='password' placeholder='Password'/><br/>
            <button className='btn btn-success form-control'>Login</button>
            <div className='row'>
                <div className='col-6'>
                    <Link>Forgot password</Link>
                </div>
                <div className='col-6' align='right'>
                    <Link>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
export default Login;