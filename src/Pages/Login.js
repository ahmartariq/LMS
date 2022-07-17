import {useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImg from "../Assets/Images/login.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


export const Login = () => {
    const navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "admin@gmail.com" && password === "admin") {
            setIsLogged(true)
            navigate("/student-listing");
        }
        else
            alert("Wrong email or password")
    };

    return (
        <div className="container-fluid fullHeight">
        <div className="row" style={{height : "100%", margin : "0"}}>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 heroImg">
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center py-12">
        <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="font-extrabold text-center text-4xl">LMS</h1>
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                value={password}
                                onChange={handlePassword}
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white primary-button"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    );
};