// login page
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { loginCall } from "../../serverCalls";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
//import { CircularProgress } from "@material-ui/core";
import {Routes, Route, useNavigate} from 'react-router-dom';


export default function Login() {

    // define two variable to fetch input value
    const email = useRef();
    const password = useRef();
    //TODO: fix return is undefine
    const { isFetching, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        var response = await loginCall(
            { email: email.current.value, password: password.current.value }
        );
        if (response.status == 200) {
            console.log(response.data);
            navigate("/home", {User: response.data.username});
            localStorage.setItem("USERINFO", JSON.stringify(response.data))
            // direct to the page you want

        }
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="left">
                    <h1>Hyperinker</h1>
                    <p>
                        This is a magic place!
                    </p>
                    <span>Don't you have an account?</span>
                    <button type="primary" className="loginRegisterButton">
                        <Link to="/register">Create a New Account</Link>
                    </button>
                </div>

                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={handleClick}>
                        <input type="text" placeholder="Email" ref={email}/>
                        <input type="password" placeholder="Password" required minLength="8" ref={password}/>
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                "Try Again"
                            ) : (
                                "Log In"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
