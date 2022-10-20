import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios  from'axios';
import { Searchbox } from './Searchbox';
import { Card } from './Card';


export const Weather = () => {

    const [city,setcity]=useState("Mumbai");
    const [data,setdata]=useState();
    

    const api_key='f13c3d8dfeabd5f515e39692821bb488';
    

    useEffect(()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        try{
          axios.get(url)
          .then((data)=>{
            setdata(data.data)
          })
          .catch((e)=>{
            alert("city Not Found")

          })
        }catch(e){
          
        }
        

    },[city])
    


  return (
    <>
      <div className='container' >
        <div className='weatherbox' >
          <Searchbox setcity={setcity} ></Searchbox> 
          {data&&<Card data={data}></Card>}
           
        </div>
 
      </div>

    
    </>
  )
}


