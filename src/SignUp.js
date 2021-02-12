import React from 'react';
import { Redirect, BrowserRouter as Router, useHistory} from 'react-router-dom';
function SignUp(){
    let history=useHistory();
    const create=()=>{
        
        alert('hello');
        var [name,pwd,cd]="";
        name=document.getElementById('username').value;
        pwd=document.getElementById('password').value;
        cd=document.getElementById('cpassword').value;
        if(name.length==0||pwd.length==0||cd.length==0){
            alert('please fill up everything');
        }else{
        
        if(pwd==cd){
            localStorage.setItem('name',name);
            localStorage.setItem('pwd',pwd);
            alert('account created');
           history.push('/');

        }else{
            alert('password and confirm password are not matching')
        }

    }
    }
    
    return(
        <div className='container' id="authbox">
            <h1 align='center'>Breaking Bad Characters</h1>
            <br/><br/>
            <input type='text' className='form-control' id='username' placeholder='Username' required/><br/>
            <input type='password' className='form-control' id='password' placeholder='Password' required/><br/>
            <input type='password' className='form-control' id='cpassword' placeholder='Confirm Password' required/><br/>
            
            <button className='btn btn-success form-control' onClick={create.bind(this)}>SignUp</button>
            
        </div>
    );
   
           
        
}
export default SignUp;