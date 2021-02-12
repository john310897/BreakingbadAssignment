import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login(){
    let history=useHistory();
    const validate=()=>{
        var name,pwd,data1,data2;
        name=document.getElementById('username').value;
        pwd=document.getElementById('password').value;
        data1=localStorage.getItem("name");
        data2=localStorage.getItem("pwd");
        if(name.length==0 || pwd.length==0){
            alert('fill up all fields');
        }else{
            if(data1==name && data2==pwd){
                history.push('/home');
            }else{
                alert('not able to get data');
            }
        }
    }
    return(
        <div className='container' width='100%' id='authbox'>
            <h1 align='center'>Breaking Bad Characters</h1>
            <br/><br/>
            <input type='text' className='form-control' id='username' placeholder='Username' required/><br/>
            <input type='password' className='form-control' id='password' placeholder='Password' required/><br/>
            <button className='btn btn-success form-control' onClick={validate.bind(this)}>Login</button>
            <div className='row'>
                <div className='col-6'>
                    <Link to='/forgotpassword'>Forgot password</Link>
                </div>
                <div className='col-6' align='right'>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
export default Login;