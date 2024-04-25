import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { WiHumidity } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { WiBarometer } from "react-icons/wi";
function App() {
  const [data, setData] = useState("")
  const [input, setInput] = useState("")
  const getData = async () => {
    // https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=32f6a2422a8aaf0979e22f6eb5c0625b
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=32f6a2422a8aaf0979e22f6eb5c0625b`)
      .then((res) => setData(res.data))
    setInput("")
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className='container d-flex justify-content-center my-3 ' style={{
        height: '400px', width: '600px',backgroundColor: 'rgb(31, 250, 239)',border:" 4px solid yellow", textAlign: "center", borderRadius: "10%",
        alignItems: "center",marginLeft:'180px',marginRight:"100px"
      }} >
        <h1> weather app</h1>
        <input type="serach" value={input} placeholder='search city ' onChange={(e) => setInput(e.target.value)} />
        <button className='btn btn-primary' onClick={getData}>search</button>
        <hr />
        <div className='d-flex justify-content-center align-items-center'>
          {
            data ? <>
              <h1>{Math.round(data.main.temp - 273.15)} &nbsp;<sup>o</sup>C</h1>
              <div className="row " style={{ display: "flex", justifyContent: 'space-around' }}>
                <div className=' col-lg-4'>Humidity<WiHumidity />:{data.main.humidity}{" "}</div>
                <div className='md-col-4 '>Pressure <WiBarometer />:{data.main.pressure}</div>
                <div className='md-col-4 '>Wind <TiWeatherWindy />{data.wind.speed} km/hr</div>


              </div>
              <div><h1>{data.name}</h1></div>
            </> : 'search any city'
          }
        </div>

      </div>


    </>
  )
}

export default App