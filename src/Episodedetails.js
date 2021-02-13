import React,{useState,useEffect} from 'react'

function Episodedetails({match}){
    
    useEffect(()=>{
        fetchData();
        console.log(match);
    },[]);
    const [items,setItems]=useState([]);
    var [charArray,chars]=useState([]);
    var alength=[];
    var b="";
    const fetchData=async()=>{
        const data=await fetch(`https://www.breakingbadapi.com/api/episodes/${match.params.id}`);
        const episodeData=await data.json();
        setItems(episodeData);        
    }
    charArray=[];

    items.map((item)=>(
        alength=({b:item.characters.length})
    ))
    

    console.log("name"+alength.b);

    for(let i=0;i<alength.b;i++){
    items.map((item)=>(
        charArray.push({name:item.characters[i]})
    ))}
    
    console.log(charArray);
    

    
    return(
        
        <div className='container'>
            <h1 align='center'>Characters List</h1><br/><br/>
            {   
                charArray.map((chars)=>
                (
                    
                        <div className='card-columns'>
                            <br/>
                                <h2 className='card  text-center'><br/>{ chars.name}<br/><br/></h2>
                                <br/>
                      </div>
                ))
            }  
        </div>
    );
}
export default Episodedetails;