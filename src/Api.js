import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Api.css';


const Api = () => {
   
    const [users,setUsers]=useState([])

    const getUser= async ()=>{
        const response=await fetch('https://api.tvmaze.com/search/shows?q=all');
        
        setUsers (await response.json());
     
        

    }
    useEffect (()=>{
        getUser();
    },[])

  return (

    users.map((curElem)=>{
        
        return (
            <>
            <div className='all' key={curElem.show.id}>
            {/* <img  src={curElem.show.image.medium}alt="" /> it giv an error  */}

            <img src={"https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg"} alt="" />
            <div className='text'>

           
                 <a href={curElem.show.url}> <h1>{curElem.show.name}</h1></a>
                 
                 <h3> Language : {curElem.show.language}</h3>
                 <h3> Rating : {curElem.show.rating.average}</h3>
                 <h4>Time : {curElem.show.schedule.time}</h4>
                 <button> <Link a={Link} to={'/summary'}> Summary</Link> </button>
                 
            </div>
            </div>
            
               
               </>
        )
        
    })

      
    
  )
}

export default Api
