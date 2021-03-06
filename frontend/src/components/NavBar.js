import React from 'react';
import { NavLink } from 'react-router-dom';
import home from './images/home.png'
import create from './images/create.png'
import user from './images/user.png'
import "../css/NavBar.css"

export const NavBar = () => {
    console.log("hello?")
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to={'/dashboard/user'}>
                        <h1 className='logo-text'>Fumblr</h1>
                    </NavLink>
                </li>
            </ul>
            <ul className="buttons">
                <li><NavLink to={'/'}><img className="user-icon" src={user} alt="user" /></NavLink></li>
                <li><NavLink to={'/'}><img src={home} alt="feed" /></NavLink></li>
                <li><NavLink to={'/'}><img src={create} alt="create post" /></NavLink></li>
            </ul>
        </nav>
    )
}