import React from 'react'
import { useState,useEffect } from 'react'

const Summery = () => {

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
             <h1>{curElem.show.name}</h1>
             <h3>{curElem.show.summary}</h3>          
        </>
    )
})

  

)
      
    
  
}

export default Summery
