import React from 'react';
import {useHistory} from 'react-router-dom';
function ForgotPassword(){
    let history=useHistory();
    const retrive=()=>{
        var user=document.getElementById('username').value;
        if(user.legth==0){
            alert('enter username');
        }else{
            if(localStorage.getItem('name')==user){
                var pwd=localStorage.getItem('pwd');
                alert('your password is :'+pwd)
                history.push('/');
            }else{
                alert('username doesnt exist');
                history.push('/signup');
            }
        }
    }
    return(
        <div className='container'>
             <h1 align='center'>Breaking Bad Characters</h1>
            <br/><br/>
            <input type='text' className='form-control' id='username' placeholder='Username' required/><br/>
            <button className='btn btn-warning form-control' onClick={retrive.bind(this)}>Retrive Password</button>
        </div>
    );
}
export default ForgotPassword;