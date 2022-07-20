import {useNavigate , useLocation} from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "./Auth/Auth";


export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const redirectPath  = location.state?.path  || '/' ;

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth()

    const handleUser = event => {
        setUser(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (user === "admin@gmail.com" && password === "admin") {
            auth.login(user)
            console.log(user);
            navigate(redirectPath , {replace : true} );
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
                                value={user}
                                onChange={handleUser}
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
                            onClick={handleSubmit}
                        >
                            Sign in
                        </button>
                    </div>
            </div>
        </div>
        </div>
        </div>
    );
};