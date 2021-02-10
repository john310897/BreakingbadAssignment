import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
function Episodedetails({match}){
    
    useEffect(()=>{
        fetchData();
        console.log(match);
    },[]);
    const [items,setItems]=useState([]);

    const fetchData=async()=>{
        const data=await fetch(`https://www.breakingbadapi.com/api/episodes/${match.params.id}`);
        const episodeData=await data.json();
        console.log(episodeData);
        setItems(episodeData);
    }
    return(
        <div className='container'>
            <h1 align='center'>EPISODE DETAILS</h1>
            <div className='card-columns'>
            {
                
                items.map((item,i=item.characters.length)=>(
                    <Link><div className='card bg-light text-center'>
                    <br/><h2>Episode: {item.episode_id}</h2><br/>
                    <h4 key={item.episode_id}>{item.characters}</h4>
                    </div></Link>
                ))
            }
            </div>
        </div>
    );

}
export default Episodedetails;