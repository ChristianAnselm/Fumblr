import React from 'react';
import { NavLink } from 'react-router-dom';
import home from './home.png'
import create from './create.png'
import user from './user.png'
import "../css/NavBar.css"

export const NavBar = () => {
    return(
        <nav>
            <ul className="navbar">
                <li>
                    <NavLink to={'/'}>
                        <h1 className='logo-text'>Fumblr</h1>
                    </NavLink>
                </li>
            </ul>
            <ul className="buttons">
            <li><NavLink to={'/'}><img src={user} alt="user"/></NavLink></li>
            <li><NavLink to={'/'}><img src={home} alt="feed"/></NavLink></li>
            <li><NavLink to={'/'}><img src={create} alt="create post"/></NavLink></li>
          
            </ul>
        </nav>
    )
}