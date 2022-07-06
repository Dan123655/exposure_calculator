import React from 'react';
import{useState} from 'react'
import Fstops from './Fstops';
function IsoOptions(props) {
const [iso, setIso] = useState(null)
const isoValue=(event)=>{setIso(event.target.id)}
if(props.weather){
    return(<>
        <div>
            <div className ='container2'>
                <h1 className="iso" id="4" onClick={isoValue}>50</h1>
                <h1 className="iso" id="3" onClick={isoValue}>160</h1>
                <h1 className="iso" id="2" onClick={isoValue}>200</h1>
                <h1 className="iso" id="1" onClick={isoValue}>400</h1>
                <h1 className="iso" id="0" onClick={isoValue}>800</h1>
            </div>
        </div>
        <div>
            <Fstops weather={props.weather} iso={iso}/>
        </div></>)
    }else{return <div className ='container2'><div className="chooseWeather">Choose weather</div></div>}
}
  

export default IsoOptions
