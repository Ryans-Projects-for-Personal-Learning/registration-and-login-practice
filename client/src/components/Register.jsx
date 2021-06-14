import React, { useState } from 'react';
import UserAPI from "../apis/UserAPI";

import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(username === "" || password === "") throw "ERROR: Username or password is empty.";
            if(password.length < 6) throw "ERROR: Password needs to be more than 6 characters."
            const response = await UserAPI.post("/", {
            username,
            password
            })
            if(response.data.username === response.username) throw "ERROR: Username already exists";
            console.log(response.data.username);
        alert("Account successfully registered!");
        } catch(err){
            alert(err);
        }
    }
    return (
        <div>
            <Container>
            <Form>
            <Form.Group className="mb-3" controlId="formLogin">
                <Form.Label>Username</Form.Label>
                <Form.Control value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={e => setPassword(e.target.value)}  type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <center>
            <Button variant="primary" className="mx-3" type="submit" onClick={handleSubmit}>
                Register
            </Button>
            </center>
            </Form>
            </Container>
        </div>
    )
}

export default Register
