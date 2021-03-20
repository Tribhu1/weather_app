  
import './App.css';
import CityInput from "./Components/CityInput";
import CityWeather from "./Components/CityWeather";
import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {TiHeartFullOutline} from "react-icons/ti"

function App() {
    const [city, setCity] = useState("")
    const [weatherNumbers, setWeatherNumbers] = useState("")
    const [weather, setWeather] = useState("")
    const [weatherCity, setWeatherCity] = useState("")
    const [weatherImage, setWeatherImage] = useState("https://2.bp.blogspot.com/-1ibqPmCG_QU/VrugWzbhJqI/AAAAAAAAASw/-Q0R0HC9dLI/s1600/phone-backgrounds-4.jpg")
    const fetchWeather = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=477b0577b454816f45f8516126ea4bb8`)
            .then((result)=> {
                if (result.status===200) {
                    return result.json()
                }else{
                    return result.json()
                }
            })
            .then(res=>{
                if (res.cod!=="404"){

                    setWeatherCity(res.name)
                    setWeather(res.weather[0])
                    setWeatherNumbers(res.main)

                    console.log(res)
                    console.log(res.weather[0].main)
                    console.log(res.main)

                    if (res.weather[0].main==="Rain"){
                        setWeatherImage("https://upload.wikimedia.org/wikipedia/commons/b/b3/Rainy_Weather_On_My_Village_%28224889743%29.jpeg")
                    }else if(res.weather[0].main==="Haze"){
                        setWeatherImage("https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/01/947061-fog.jpg")
                    }else if(res.weather[0].main==="Clouds"){
                        setWeatherImage("http://www.weatherwizkids.com/wp-content/uploads/2015/02/fractus-clouds.jpg")
                    }else if(res.weather[0].main==="Smoke"){
                        setWeatherImage("https://media.king5.com/assets/KING/images/49b28d87-4171-4945-b448-aca152617f33/49b28d87-4171-4945-b448-aca152617f33_1920x1080.jpg")
                    }
                    else{
                        setWeatherImage("https://indiahikes.com/wp-content/uploads/2020/06/ValleyOfFlowers-Pavan-Jain-Blooming-flowers-of-the-valley-1.jpg")
                    }

                }else{
                    setWeather("404")
                }
            })
    }
    return(
        <div className="App" style={{background: `url(${weatherImage})`, backgroundRepeat: "no-repeat"}}>
            <Container>
                <Row>
                    <Col className="m-auto" xs={10} md={6}>
                        <CityInput fetchCityWeather={fetchWeather} city={city} setCity={setCity}/>
                        <CityWeather weatherNumber={weatherNumbers} weatherCity={weatherCity} weather={weather}/>
                    </Col>
                </Row>
            </Container>
            <p className="footer">
                Designed with <TiHeartFullOutline className="text-danger"/>  by :
                <a rel="noreferrer" target="_blank" href="https://github.com/Tribhu1">Tribhuwan</a>
            </p>
        </div>
    )
}

export default App;
