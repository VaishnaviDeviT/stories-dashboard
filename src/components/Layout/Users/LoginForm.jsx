import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './LoginForm.css'; 

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [validationError, setValidationError] = useState({});
    const navigate = useNavigate(); 

    useEffect(() => { 
        const userInfo = localStorage.getItem('username');
        if (userInfo) {
            navigate('/dashboard');  
        }
    }, [navigate]);

    const validateForm = () => {
        const errors = {};
        if (!username.trim()) {
            errors.username = 'The Username field is required.';
        }
        if (!password.trim()) {
            errors.password = 'The password field is required';
        }
        setValidationError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

    
        const validUsername = "026588";
        const validPassword = "vaish@123";

        if (username === validUsername && password === validPassword) {
            console.log("Login successful, redirecting...");
            sessionStorage.setItem('username', username);
            navigate('/dashboard');
        } else {
            setError('Invalid details. Please try again with valid details');
        }
    };

    return (
        <div className="login-page"> 
            <Container className="my-5">
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={5}>
                        <div className="card card-body px-4 py-5">
                            <h1 className="text-center mb-4">
                                <img src="./assets/logo.png" alt="login-page-logo" />
                            </h1>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        type="text"
                                        placeholder="Enter Username"
                                        onChange={(e) => setUsername(e.target.value)}  
                                    />
                                </Form.Group>
                                {validationError.username && (<p style={{ color: 'red' }}>{validationError.username}</p>)}
                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password"  
                                        placeholder="Enter Password"
                                        onChange={(e) => setPassword(e.target.value)}  
                                    />
                                </Form.Group>
                                {validationError.password && (<p style={{ color: 'red' }}>{validationError.password}</p>)}
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <Button className="mt-4 w-100" type="submit">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
