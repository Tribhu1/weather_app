import React from 'react';
import {Alert} from "react-bootstrap";


const Error = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>City not found.</Alert.Heading>
        </Alert>
    );
};

export default Error;