import React from 'react'
import{useState} from 'react'
import IsoOptions from '../IsoOptions'
function Weather() {
const [weather, setWeather] = useState(null)
const weatherValue=(event)=>{setWeather(event.target.id)}

return (
<div id="weatherDiv">
    <div className="container">
        <img src={require("./sun.svg")} id='0' className="weatherPic" onClick={weatherValue} width="10%" height="10%"/>
        <img src={require("./cloud.svg")} id='1' className="weatherPic" onClick={weatherValue} width='10%' height='10%'/>
        <img src={require("./sunset.svg")} id='2' className="weatherPic" onClick={weatherValue} width='10%' height='10%'/>
    </div>
      <IsoOptions weather={weather}/>
    </div>

  )
}

export default Weather
