import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { NewsContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const {loginUser, location} = useContext(NewsContext);
    const navigate = useNavigate();
    const lastLocation = useLocation(); // better way to get last tried private route url
    console.log(lastLocation.state, location); // location keep url even after user manually go to login.

    const handleLogin = e => {
        e.preventDefault();

        const registerEmail = e.target.email.value;
        const registerPassword = e.target.password.value;
        console.log( registerEmail, registerPassword);

        loginUser(registerEmail, registerPassword)
        .then((result) => {
            console.log(result.user);
            // Redirect after login
            // navigate(location !== '' ? location : '/'); // we get the location from NewsContext, there is another way to get the location.
            navigate(lastLocation?.state ? lastLocation.state : '/') // only keep state if user is forced to redirect to login while trying to access private route. not if manually go to login.

        })
        .catch((error) => console.error(error))

        e.target.reset();

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className="hero-content">
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-8">
                    <h2 className="text-2xl text-center font-bold">Login your account</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-lg">Login</button>
                            </div>
                            <p className="text-center mt-4">Don't have an account? <Link to={'/Registration'}><span className="text-white ">Register</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;