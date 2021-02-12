import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
function Allcharecters(){
    
    useEffect(()=>{
        fetchData();
    },[]);
    const [items,setItems]=useState([]);

    const fetchData=async()=>{
        const data=await fetch('https://www.breakingbadapi.com/api/characters');
        const episodeData=await data.json();
        console.log(episodeData);
        setItems(episodeData);
    }
    return(
        <div className='container'>
            <h1 align='center'>All Characters and Appearance</h1>
            <br/>
            <div className='card-columns'>
            {
                items.map(item=>(
                    <div className='card text-center card-inverse' width="600" height="400" id='charectersbox'>
                    <br/>
                    <h3>{item.name}</h3>
                    <h3>{item.appearance}</h3>
                    <img src={item.img} className='responsive' width="600" height="400"/>
                    <br/>
                    </div>
                ))
            }
            </div>
        </div>
    );

}
export default Allcharecters;