import React from 'react'
import { Link } from 'react-router-dom'


// export default class LandingPage extends React.component {
//     state = {
//         signupToggled: false,
//         loginToggled: false
//     };

//     toggleSignup = e => {
//         this.setState({
//             signupToggled: !signupToggled
//         });
//         if (signupToggled) {
//             return <Redirect to="/users/new" />
//         }

//     }

//     toggleLogin = e => {
//         this.setState({
//             loginToggled: !loginToggled
//         });
//         if (loginToggled) {
//             return <Redirect to="/users/login" />
//         }

//     }

export const LandingPage = () => {

    return (
        <div className="landingPage" >

            <h1>Come for what you love</h1>
            <h3>stay because you can't logout</h3>
            <Link to='/users/new'>
                <button
                    className="button"
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
