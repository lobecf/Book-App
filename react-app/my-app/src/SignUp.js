import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp () {
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
            .then(data => console.log(data))
        } else {
            console.log("invalid password")
        }

    }

    return (
        <div className="login-SignUp-form">
            <h2>Sign Up</h2>
            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </form>
            <button type="submit" onClick={handleSubmit}>
                <Link to="/customize-playlist"> Submit </Link>
            </button>
        </div>
    )
}

export default SignUp