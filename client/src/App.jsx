import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import LoggedIn from "./routes/LoggedIn";
import {UsersContextProvider} from "./contexts/UserContext";

const App = () => {
    return <div>
        <UsersContextProvider>
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/loggedin" component={LoggedIn}/>
            
            </Switch>
        </Router>
        </UsersContextProvider>
    </div>
};

export default App;