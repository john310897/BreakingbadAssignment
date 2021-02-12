import React,{useState,useEffect} from 'react'
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
            <h1 align='center'>Characters List</h1><br/><br/>
            {   
                items.map((item)=>
                (
                    
                        <div className='card-columns'>
                                <h4 className='card  text-center'>{item.characters[0]}</h4>
                                <h4 className='card  text-center'>{item.characters[1]}</h4>
                                <h4 className='card  text-center'>{item.characters[2]}</h4>
                                <h4 className='card  text-center'>{item.characters[3]}</h4>
                                <h4 className='card  text-center'>{item.characters[4]}</h4>
                                <h4 className='card  text-center'>{item.characters[5]}</h4>
                                <h4 className='card  text-center'>{item.characters[5]}</h4>
                                <h4 className='card  text-center'>{item.characters[6]}</h4>
                                <h4 className='card  text-center'>{item.characters[7]}</h4>
                                <h4 className='card  text-center'>{item.characters[8]}</h4>  
                                <h4 className='card  text-center'>{item.characters[9]}</h4>  
                                <h4 className='card  text-center'>{item.characters[10]}</h4>   
                      </div>
                ))
            }  
        </div>
    );
}
export default Episodedetails;