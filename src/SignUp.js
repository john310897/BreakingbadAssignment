import React from 'react';

function SignUp(){
    return(
        <div className='container'>
            <h1 align='center'>Breaking Bad Characters</h1>
            <input type='text' className='form-control' id='username' placeholder='Username'/>
            <input type='password' className='form-control' id='password' placeholder='Password'/>
            <input type='password' className='form-control' id='password' placeholder='Confirm Password'/>
            
            <button className='btn btn-success form-control'>SignUp</button>
            
        </div>
    );
}
export default SignUp;