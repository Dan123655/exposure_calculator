import React from 'react'
import{useState} from 'react';
import Result from './Result';

function Fstops(props) {
var fStop=["f2","f2.8","f4","f5.6","f8","f11","f16","f22","f32"]; 
const [shutter, setShutter] = useState(null)
const shutterSpeed=(event)=>{setShutter(event.target.id)}

if(props.iso){
return( 
<>
  <div className='container3'>{fStop.map((item,i)=><div className ='fStop' id= {i} onClick={shutterSpeed}>{item}</div>)}</div>
    <div>
      <Result shutter={shutter} iso={props.iso} weather={props.weather}/>
    </div>
</>)
}else{return <div className ='container3'><div className="setIso">Set ISO</div></div>}
}
export default Fstops