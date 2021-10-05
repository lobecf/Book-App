import React, { useState } from "react";

function Login () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = (e) => {
        setName("");
        setEmail("");
        setUserName("");
        setPassword("");
        setConfirmPassword("");

        const account = { name, email, userName, password, confirmPassword };

        fetch("http://localhost:3000/Account", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(account)
        })

    }

    return (
        <div>
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
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
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
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login