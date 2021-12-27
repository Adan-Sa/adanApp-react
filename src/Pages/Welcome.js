import React from "react";
import "./welcome.css";
export default function Welcome() {

    function Click(e) {
        e.preventDefault();
        window.location.href = "http://localhost:3000/login";

    }

    return (
        <>
            <div className="container">
                <h1>Welcome to our website</h1>
                <button className="btn" onClick={Click}>Log in</button>
                <h6>Haven't you registered yet?</h6>
                <a href="http://localhost:3000/register">Register</a>
            </div>
        </>

    )

}
