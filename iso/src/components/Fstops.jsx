import React from 'react'
import{useState} from 'react';
import Result from './Result';

function Fstops(props) {
var fStop=["2","2.8","4","5.6","8","11","16","22","32"]; 
const [shutter, setShutter] = useState(null)
const shutterSpeed=(event)=>{setShutter(event.target.id)}

if(props.iso){
return( 
<>
  <div className='container3'>{fStop.map((item,i)=><button className ='fStop' id= {i} onClick={shutterSpeed}>{item}</button>)}</div>
    <div>
      <Result shutter={shutter} iso={props.iso} weather={props.weather}/>
    </div>
</>)
}else{return <div className ='setIso'><div>Select your film ISO</div></div>}
}
export default Fstops