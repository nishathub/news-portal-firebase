import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { NewsContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Registration = () => {

    const {registerUser, updateUser} = useContext(NewsContext);
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const registerName = e.target.name.value;
        const registerPhotoURL = e.target.photoURL.value;
        const registerEmail = e.target.email.value;
        const registerPassword = e.target.password.value;
        console.log(registerName, registerEmail, registerPassword, registerPhotoURL);

        // ANOTHER WAY TO GET ((FORM DATA))
        // const form = new FormData(e.currentTarget); 
        // const getEmail = form.get('email');
        // const getName = form.get('name');
        // console.log(getEmail, getName);

        registerUser(registerEmail, registerPassword)
        .then((result) => {
            console.log(result.user)
            // update user profile
            updateUser(registerName, registerPhotoURL)
            .then(()=>{
                console.log('profile updated');
                navigate('/Login')
        })
            .catch((error)=> console.error(error))
        })
        .catch((error) => console.error(error))
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className="hero-content">
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 py-8">
                    <h2 className="text-2xl text-center font-bold">Register your account</h2>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="flex gap-4 mt-2">
                                <input onChange={() => setChecked(!checked)} type="checkbox" />
                                <p>Accept <span className="font-bold">Terms & Conditions</span></p>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled = { checked ? true : false} className="btn btn-primary text-lg">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;