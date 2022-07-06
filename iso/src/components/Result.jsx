import React from 'react'
function Result(props) {
  var shutters=["1/64000","1/32000","1/16000","1/8000","1/4000","1/2000","1/1000","1/500","1/250","1/125","1/60","1/30","1/15","1/8","1/4"];
  var fStop=["f2","f2.8","f4","f5.6","f8","f11","f16","f22","f32"]; 
  var weather=()=>{
var msg='Your settings: '
  if (props.weather==0){return msg + 'Sunny'}
    else if(props.weather==1){return msg + "Cloudy"}
      else if(props.weather==2){return msg + "In shade"}
        else{return "smt not right"}}
var iso=()=>{
  if(props.iso==4){return ', ISO 50'}
    else if(props.iso==3){return ', ISO 160'}
      else if(props.iso==2){return ', ISO 200'}
        else if(props.iso==1){return ', ISO 400'}
          else if(props.iso==0){return ', ISO 800'}
            else{return "fix iso"}}
return (<>
  <div className='container4'>
  <h1 className="s" id="result">{weather()}{iso()}</h1>
</div>
<div className='container5'>
<h1 className="s" id="result2">{fStop[parseInt(props.shutter)]}  {shutters[parseInt(props.weather)+parseInt(props.iso)+parseInt(props.shutter)]} </h1>
</div>
  </>)
}

export default Result
