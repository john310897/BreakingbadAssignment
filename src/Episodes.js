import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
function Episodes(){
    
    useEffect(()=>{
        fetchData();
    },[]);
    const [items,setItems]=useState([]);

    const fetchData=async()=>{
        const data=await fetch('https://www.breakingbadapi.com/api/episodes');
        const episodeData=await data.json();
        console.log(episodeData);
        setItems(episodeData);
    }
    return(
        <div className='container'>
            <h1 align='center'>EPISODES</h1>
            <div className='card-columns'>
            {
                items.map(item=>(
                    <Link to={`/episodedetails/${item.episode_id}`}><div className='card bg-light text-center'>
                    <br/><h2>EPISODE:{item.episode_id}</h2><br/>
                    <h4>{item.title}</h4>
                    </div></Link>
                ))
            }
            </div>
        </div>
    );

}
export default Episodes;