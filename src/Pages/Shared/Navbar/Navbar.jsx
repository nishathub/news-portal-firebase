import { Link, NavLink } from "react-router-dom";
import userLogo from '../../../assets/user.png'
import { useContext } from "react";
import { NewsContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {

    const {user, logoutUser} = useContext(NewsContext);
    const handleLogout = e => {
        e.preventDefault();
        logoutUser()
        .then(()=> {})
        .catch((error)=> console.log(error))
    }

    const links =
        <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/About'}>About</NavLink></li>
        <li><NavLink to={'/Career'}>Career</NavLink></li>
        <li><NavLink to={'/Registration'}>Register</NavLink></li>
        <li><NavLink to={'/Login'}>Login</NavLink></li>
        </>
    return (
        <div className="">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <img className="h-8 rounded-full" src={user ? user.photoURL : userLogo} alt="user-profile-photo" />
                    {
                        user ? 
                        <button onClick={handleLogout} className="btn btn-ghost">Logout</button> 
                        : 
                        <Link to={'/Login'}><button className="btn px-8"> Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;