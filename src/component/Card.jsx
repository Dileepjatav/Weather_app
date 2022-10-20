
import React, { useEffect, useState } from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const Card = (props) => {
    const [direction,setdirection]=useState();
    const [datetime,setdatetime]=useState({});
    const [hour,sethour]=useState();
    const [min,setmin]=useState();
    
    
    const dt=new Date();

    const forcastdata={
        tempreture:Math.round(props.data.main.temp-273.15),
        maxtempreture:Math.round(props.data.main.temp_max-273.15),
        mintempreture:Math.round(props.data.main.temp_min-273.15),
        wind_speed:props.data.wind.speed,
        wind_direction:props.data.wind.deg,
        string:props.data.weather[0].description,
        city:props.data.name 
    }
     
    function getCardinalDirection(angle){
        const directions = ['↑ North', '↗ North East', '→ East', '↘ South East', '↓ South', '↙ South West', '← West', '↖ North West'];
    return directions[Math.round(angle / 45) % 8];
    }
    
    useEffect(()=>{
        const timestr={
            date:dt.getDate(),
            month:dt.getMonth(),
            year:dt.getFullYear(),
            day:dt.toLocaleString('en-us', {  weekday: 'long' }),
        
        }
        setdatetime(timestr)

        setInterval(() => {
            const dx=new Date();
            sethour(dx.getHours());
            setmin(dx.getMinutes());
        }, 1000);  

    })


    useEffect(()=>{
         setdirection(getCardinalDirection(forcastdata.wind_direction));
    },[props]);

  return (
    <div className='card-container' >
        <div className='box1' >
            <div className='content1'>
                <h2 className='city' >{forcastdata.city}</h2>
                <p className='date' >{datetime.day} {datetime.date}/{datetime.month}/{datetime.year}</p>
                <p className='time'>{hour}:{min}</p>
            </div>
            <div className='content2'>
                <div className='temp'>
                    <h1 className='celcius' >{forcastdata.tempreture}</h1>
                    <p className='o'>O</p>
                    <p className='c'>C</p>
                    
                </div>
                <div className='str' >
                    <p>{forcastdata.string}</p>
                    <div className='icon' ><AcUnitIcon ></AcUnitIcon></div>
                    
                </div>
               
            </div>

        </div>
        <div className='box2' >
            <div className='box3' >
                <p className='avg-temp'>MAX:{forcastdata.maxtempreture}</p>           
                <span>o</span>
                <p className='avg-temp'>Min:{forcastdata.mintempreture}</p>
                <span>o</span>
            </div>
            
            <p className='wind avg-temp' >Wind :{direction} {forcastdata.wind_speed} mi/h</p>

        </div>

    </div>
  )
}
