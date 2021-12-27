import React from "react";
import "./register.css";

export default function Register(props) {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordAgain, setPasswordAgian] = React.useState("");
    const [error, setError] = React.useState("");
    const [nameInstruction, setNameInstruction] = React.useState("");
    const [passInstruction, setPassInstruction] = React.useState("");

    //username can be letters and numbers (possible with "_"), but without special characters, e.g., ! @ # ?
    var testRegex = /\W/; // regex that hasn't letters, numbers but a special characters
    function CheckUsername(event) {
        setUserName(event.target.value);
        setError("");
        if (testRegex.test(event.target.value)) {
            setError("Username must be a mixure of upper and lower case of letters and numbers not include special character, e.g., ! @ # ? ");
        }
    }

    //use a password you don't use elsewhere, min 8 characters, include ABcd123!
    function CheckPassword(event) {
        setPassword(event.target.value)
        setError("");
        let upLetterRegex = /[A-Z]/; // regex for uppercase
        if (event.target.value.length < 8 || !testRegex.test(event.target.value) || !upLetterRegex.test(event.target.value)) {
            setError("Password must be at least 8 characters, a mixure of upper and lower case of letters and numbers includes of at least one special character, e.g., ! @ # ? ");
        }
    }

    //checking if the passwords match
    function CheckMatchPasswords(event) {
        setPasswordAgian(event.target.value)
        setError("");
        if (password !== event.target.value) {
            setError("Password doesn't match, please re-enter your password");
        }
    }

    function Click(e) {

        e.preventDefault();
        const data = { userName, password };
        fetch("http://localhost:4000/register", {
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

        setUserName("");
        setPassword("");
        setPasswordAgian("");

    }


    return (
        <>
            <div className="container">
                <h1>Register</h1>
                <h6 className="instruction"> Please select for yourself a username and a password:</h6>
                <label className="label" >User name:</label>
                <input className="nameInput" type="text" value={userName} onClick={() => { setNameInstruction('Username can be letters and numbers (possible with "_")'); setPassInstruction(""); }}
                    onChange={CheckUsername} required></input>
                <span> {nameInstruction}</span>
                <label className="label">Password:</label>
                <input className="passInput" type="password" value={password} onClick={() => {
                    setNameInstruction("");
                    setError("");
                    setPassInstruction("Use a password you don't use elsewhere")
                }} onChange={CheckPassword} required></input>
                <span> {passInstruction}</span>
                <h6>Enter your password again:</h6>
                <input className="passInput" type="password" value={passwordAgain} onClick={() => { setNameInstruction(""); setPassInstruction(""); }}
                    onChange={CheckMatchPasswords} required></input>
                <button className="BTN" onClick={Click}>Register</button>
                <a href="http://localhost:3000/login">Login</a>
                <span>{error}</span>
            </div>
        </>
    )

}

