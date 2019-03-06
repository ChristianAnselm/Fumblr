import React from 'react'
import { Link } from 'react-router-dom'

export const LandingPage = () => {

    return (
        <div className="landingPage" >
            <h1
                className="logo-text"
            >Fumblr</h1>
            <p>Come for what you love</p>
            <p>stay because you can't logout</p>
            <Link to='/users/new'>
                <button
                    className="button1"
                >
                    Get Started
                </button>
            </Link>
            <br></br>

            <Link to='/users/login'>
                <button
                    className="button"
                >
                    Login Here
                </button>
            </Link>

        </div >
    )

}
