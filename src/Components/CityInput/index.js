  
import React, {useState} from 'react';
import {Form, Button, Container} from "react-bootstrap";

const CityInput = ({city, setCity, fetchCityWeather}) => {
    const [error, setError] = useState("");
    const handleInputChange = (e)=>{
        setCity(e.target.value)
        console.log(city)
    }

    const handleClick = (e)=>{
        e.preventDefault()
        if (!city){
            setError("Field is empty")
        }else{
            setError("")
            fetchCityWeather()
        }
    }

    return (
        <Container className="m-auto p-5">
            <h2 className="text-light m-3">Weather App</h2>
            <Form onSubmit={handleClick} style={{textAlign: "center"}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        value={city}
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Enter City" />
                    <small className="text-danger">{error}</small>
                </Form.Group>
                <Button onClick={handleClick} variant="success">
                    Submit
                </Button>
            </Form>
        </Container>

    );
};

export default CityInput;