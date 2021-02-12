import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className='container'>
            <h1 align='center'>Breaking Bad Characters</h1>
            <br/><br/>
            <div className='row' align='center'>
                <div className='col'>
                    <Link to='/episodes' className='btn btn-warning'>View By Episodes</Link>
                </div>
                <div className='col'>
                    <Link to='/allcharecters' className='btn btn-warning'>View Characters</Link>
                </div>
            </div>
        </div>
    );
}
export default Home;