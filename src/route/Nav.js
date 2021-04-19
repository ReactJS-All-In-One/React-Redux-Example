import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import './Nav.css';
import UserData from '../containers/Counter/Counter';
import About from '../containers/About/About';



const nav = () => {
    return (
        <Router>
            <div className={'nav'}>
                <ul>
                    <li> <Link to='/'> Home </Link> </li>
                    <li>User Data</li>
                    <li> <Link to='/about'> About </Link></li>
                </ul>

                <Route exact  path='/' component={UserData} />
                <Route path={'/about'} component={About} />
            </div>

        </Router>
    )


}

export default nav;

