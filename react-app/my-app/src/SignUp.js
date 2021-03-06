import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function SignUp ({ setLogin }) {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = (e) => {
        setName("");
        setEmail("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");

        const account = { name, username, email, password };
        if (password === confirmPassword) {
            fetch("http://localhost:9292/users", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(account)
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setLogin(data.id)
            })
            history.push("/questionnaire")
        } else {
            console.log("invalid password")
        }

    }

    return (
        <div>
        <h5>SIGN UP</h5>
        <div className="login-SignUp-form-Div">
            <form className="Login-signup-form-container">
                <input className="login-SignUp-form"
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input className="login-SignUp-form"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="login-SignUp-form"
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input className="login-SignUp-form"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input className="login-SignUp-form"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </form>
            <button type="submit" onClick={handleSubmit} className="login-Signup-btn">
                Sign Up
            </button>
        </div>
        </div>
    )
}

export default SignUp