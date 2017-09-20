import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Stream from './Stream';

export default function Main(props) {
    const {menus, handleMenuClick} = props;
    const jsxMenus = menus.map((m, i) => {
        return (
            <div key={i} onClick={() => handleMenuClick(m) }>
                <Link to={m.path}>{m.title}</Link>
            </div>
        );
    });

    return(
        <Router>
            <div className="flex-container">
                {jsxMenus}
            </div>
            <Route exact path='/' component={Main} />
            <Route path='/movies' component={Stream} />

        </Router>
    );
}