
import "./register.scss";

import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        //console.log("handleclick function");
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/register", user);
                console.log("hi there");
                history("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="register">
            <div className="loginContainer">
                <div className="left">

                    <h1>Magic App.</h1>

                    <h1>Hyperinker</h1>

                    <p>
                        This is a magic place!
                    </p>
                    <span>Do you have an account?</span>
                    
                    <button type="primary" className="loginRegisterButton">
                        <Link to="/login">Log into Account</Link>
                    </button>
                </div>

                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={handleClick}>
                        <input 
                            type="text" 
                            placeholder="Username"
                            required
                            ref = {username}
                            className = "loginInput" 
                        />
                        <input 
                            type="email" 
                            placeholder="Email"
                            required
                            ref = {email}
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            required
                            ref = {password}
                            minLength="8"
                        />
                        <input 
                            type="password" 
                            placeholder="password again"
                            required
                            ref={passwordAgain}
                        />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;