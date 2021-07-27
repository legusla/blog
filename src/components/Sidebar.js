import "./Sidebar.css"
import { useStateValue } from "../Statetprovider";
import { useEffect, useState } from "react";

const Sidebar = () => {

    const [weatherdata, setWeatherdata]= useState()

    useEffect(()=>{
     const successCallback = (position)=> {
         console.log(position.coords.longitude, position.coords.latitude)
         let URL = `https://community-open-weather-map.p.rapidapi.com/forecast?units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
            fetch(URL, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "8f33a2320emsh6677c393bf1ffb9p181350jsnce9b5344666a",
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
                }
            })
.then(response => response.json()).then(data => setWeatherdata(data)).then(data => console.log(data))
     }

     const errorCallback = err => console.log(err)

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }, [])




    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h4>{weatherdata?.city.name}</h4>
               <img src={`/icons/${weatherdata?.list[0].weather[0].icon}.png`}/>
                <h1>{Math.round(weatherdata?.list[0].main.temp)}°C </h1>
            </div>
            <div className="sidebar__bottom">
                <h4>Welcome</h4>
                <h4>{user?.displayName}</h4>
            </div>
        
        </div>
    )
}

export default Sidebar
