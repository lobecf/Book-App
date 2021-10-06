import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login (setLogin) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        setUsername("");
        setPassword("");

        const account = { username, password };
            fetch("http://localhost:9292/users", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(account)
            });

    };

    return (
        <div className="login-SignUp-form">
            <h2>Login</h2>
            <form>
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
            </form>
            <button type="submit" onClick={handleSubmit}>
                <Link to="/goal"> Submit </Link>
            </button>
        </div>
    )
}

export default Login