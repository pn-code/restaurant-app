import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await axios.post("http://localhost:3000/api/auth", {
                username,
                password,
            });
            router.push("/admin")
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        // Container
        <div className="mt-10 flex items-center justify-center text-center sm:text-left">
            <div className="flex flex-col px-24 py-12 bg-slate-900 rounded-lg">
                <h1 className="my-2 text-3xl font-bold text-white">
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
                <div className="flex flex-col">
                    <button
                        onClick={handleLogin}
                        className="mt-5 py-2 px-5 bg-slate-600 text-white font-bold rounded-md"
                    >
                        Login
                    </button>
                    {error && (
                        <div className="mt-2 py-2 flex justify-center items-center text-white font-bold">
                            <span>
                                Wrong Credentials!
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
