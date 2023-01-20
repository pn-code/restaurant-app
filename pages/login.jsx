import React, { useState } from "react";

const login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {};
    
    return (
        // Container
        <div className="mt-10 mx-10 flex items-center justify-center text-center sm:text-left bg-slate-900 rounded-lg">
            <div className="p-12">
                <h1 className="my-5 text-3xl font-bold text-white">
                    Admin Login
                </h1>
                <div className="flex flex-col">
                    <label
                        className="font-semibold text-white"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        id="username"
                        type="text"
                        value={username}
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="font-semibold text-white"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type="password"
                        value={password}
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="mt-5 py-2 px-5 bg-slate-600 text-white font-bold rounded-md"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default login;
