import React from 'react';
import Header from '../components/Header';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

const LoggedIn = () => {
    return (
        <div>
            <Header />
            You have logged in.

            <Link to="/">
            <Button variant="primary" className="mx-3" type="submit">
                Logout
            </Button>
            </Link>
        </div>
    )
}

export default LoggedIn
