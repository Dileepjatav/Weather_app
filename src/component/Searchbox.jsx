import React, { useState } from 'react'

export const Searchbox= (props) => {
    const [input,setinput]=useState("");

    const submit=()=>{
        props.setcity(input);
        setinput("")
    }

  return (
    <div className='search-area' >
        <input type='text' className='input' placeholder='Search city' value={input} onChange={(e)=>{setinput(e.currentTarget.value)}} ></input><br></br>
        <button type='button' className='btn' onClick={submit} >Submit</button>
        
    </div>
  )
}
