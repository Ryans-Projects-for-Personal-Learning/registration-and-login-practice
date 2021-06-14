import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Header />
            <center>Please enter your details below and click on register to create an account or log in.</center>
            <center>
            <Link to="/login">
            <Button variant="primary" className="mx-3">
                Login
            </Button>
            </Link>
            <Link to="/Register">
            <Button variant="primary" className="mx-3">
                Register
            </Button>
            </Link>
            </center>
        </div>
    )
}

export default Home
