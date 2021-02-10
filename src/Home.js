import React from 'react';

function Home(){
    return(
        <div className='container'>
            <h1 align='center'>Breaking Bad Characters</h1>
            <div className='row' align='center'>
                <div className='col'>
                    <button className='btn btn-warning'>View By Episodes</button>
                </div>
                <div className='col'>
                    <button className='btn btn-warning'>View By Characters</button>
                </div>
            </div>
        </div>
    );
}
export default Home;