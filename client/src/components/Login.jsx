import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import UserAPI from '../apis/UserAPI';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(username === "" || password === "") throw "ERROR: Username or password is empty.";
            const response = await UserAPI.post("/login", {
                username,
                password
            });
            console.log(response);
            if(response.data.status === "success") history.push("/LoggedIn");
            else alert("User or password is incorrect");
        } catch(err){
            console.log(err)
            alert(err)
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
                <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <center>
            <Button variant="primary" className="mx-3" type="submit" onClick={handleSubmit}>
                Login
            </Button>
            </center>
            </Form>
            </Container>
        </div>
    )
}

export default Login
