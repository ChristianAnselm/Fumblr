import React from 'react'
import { NavLink } from 'react-router-dom';

// import { Redirect } from 'react-router-dom'


// class LandingPage extends React.component {
//     state = {
//         signupToggled: false,
//         loginToggled: false
//     };

// toggleSignup = e => {
//     this.setState({
//         signupToggled: !signupToggled
//     });
//     if (signupToggled) {
//         return <Redirect to="/users/new" />
//     }

// }

// toggleLogin = e => {
//     this.setState({
//         loginToggled: !loginToggled
//     });
//     if (loginToggled) {
//         return <Redirect to="/users/login" />
//     }

// }

export const LandingPage = () => {

    return (
        <div className="landingPage">

            <h1>Come for what you love</h1>
            <br></br>
            <h3>stay because you can't logout</h3>
            <input
                className="button"
                type="button"
                value="Get Started"
            // onClick={this.toggleSignup}
            />
            <h5>or</h5>
            <input
                className="button"
                type="button"
                value="Log In"
            // onClick=""
            />

        </div >
    )
}
