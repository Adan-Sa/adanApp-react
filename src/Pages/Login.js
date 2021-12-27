import React from "react";
import "./login.css";

export default function Login(props) {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    function Click(e) {
        e.preventDefault();
        if (userName === "" || password === "") {
            window.alert("Please enter a username or a password");
        } else {

            const data = { userName, password };

            fetch("http://localhost:4000/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "content-type": "application/json" },
            })
                .then(response => {
                    if (!response.ok) throw new Error(response.status);
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    if (!data.success) {
                        setError(data.message)
                    } else {
                        setError(data.message)
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }



    }

    return (
        <>
            <div className="container">
                <h1 className="login">Login</h1>
                <h6 className="instruction"> Please enter your username and your password:</h6>
                <label className="label" >User name:</label>
                <input className="input" type="text" value={userName} onChange={(event) => setUserName(event.target.value)} required></input>
                <label className="label">Password: </label>
                <input className="input" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required></input>
                <button className="BTN-login" onClick={Click}>Login</button>
                <span>{error}</span>
                <h6>Haven't you registered yet?</h6>
                <a href="http://localhost:3000/register">Register</a>
            </div>
        </>
    )

}

