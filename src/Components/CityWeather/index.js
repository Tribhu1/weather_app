  
import React from 'react';
import {Alert, Row, Col} from "react-bootstrap";
import Error from "../Error";
import {FaTemperatureHigh} from "react-icons/fa"
import {WiHumidity} from "react-icons/wi"

const CityWeather = ({weather, weatherCity, weatherNumber}) => {
    if (weather==="404"){
        return <Error/>
    }else if (weather){
        return (
            <Alert variant="success">
                <Alert.Heading>{weatherCity}</Alert.Heading>
                <p>{weather.main}</p>
                <hr />
                <Row>
                    <Col xs={6}><FaTemperatureHigh/> : {weatherNumber.temp}</Col>
                    <Col xs={6}><WiHumidity/>{weatherNumber.humidity}</Col>
                </Row>
                <hr/>
                <p className="mb-0">{weather.description}</p>
            </Alert>
        );
    }else {
        return <></>
    }
};

export default CityWeather;