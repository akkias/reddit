import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom';
const logo = '/images/logo.svg'
class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <aside className="app-sidebar">
                <NavLink to="/" className="app-brand">
                    <img src={logo} alt="Reddit" height="30" />
                </NavLink>
                <form className="app-sidebar-search">
                    <input placeholder="Search" type="text" name="search" id="search" className="app-form-control app-form-control--search" />
                    <FontAwesomeIcon className="app-sidebar-search-icon" icon="search" />
                </form>
                <ul className="app-list app-list-nav">
                    <li><NavLink to="popular" className="active">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                </ul>
                <ul className="app-list app-list-nav">
                    <li><NavLink to="popular">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                    <li><NavLink to="popular">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                    <li><NavLink to="popular">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                    <li><NavLink to="popular">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                    <li><NavLink to="popular">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                    <li><NavLink to="popular">Popular</NavLink></li>
                    <li><NavLink to="popular">All</NavLink></li>
                    <li><NavLink to="popular">Original Content</NavLink></li>
                </ul>
            </aside>
        )
    }
}

export default Sidebar;