import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="app-header">
                <nav>
                    <NavLink className="active" to="Hot">Hot</NavLink>
                    <NavLink to="New">New</NavLink>
                    <NavLink to="Controversial">Controversial</NavLink>
                    <NavLink to="Top">Top</NavLink>
                    <NavLink to="Rising">Rising</NavLink>
                </nav>
                <div className="app-header-actions">
                    <NavLink className="text-primary" to="Top">Login</NavLink>
                    <button className="btn">Sign Up</button>
                </div>
            </header>
        )
    }
}

export default Header;