
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import { useContext } from "react";
import { NewsContext } from "../../../AuthProvider/AuthProvider";

const RightSideNav = () => {
   const {loginWithGoogle, loginWithGithub} = useContext(NewsContext);

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then((result) => console.log(result.user))
        .catch((error) => console.error(error))
    }
    const handleGithubLogin = () => {
        console.log('github login inside');
        loginWithGithub()
        .then((result) => console.log(result.user))
        .catch((error) => console.error(error))
    }
    return (
        <div className="flex flex-col gap-12 text-left p-2">
            <div >
                <h2 className="text-xl font-bold mb-4">Login With</h2>
                <div className="flex flex-col gap-2">
                    <a onClick={handleGoogleLogin} className="flex items-center gap-2 justify-center btn btn-outline btn-success">
                        <FaGoogle></FaGoogle>
                        <span>Login with Google</span>
                    </a>
                    <a onClick={handleGithubLogin} className="flex items-center gap-2 justify-center btn btn-outline btn-info">
                        <FaGithub></FaGithub>
                        <span>Login with Github</span>
                    </a>

                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Find Us On</h2>
                <div className="flex flex-col gap-2 border border-slate-400 rounded-md ">
                    <a href="#" className="flex items-center gap-2 border-b border-slate-400 py-4 pl-4">
                        <p className="p-2 bg-black rounded-full"><FaFacebook></FaFacebook></p>
                        <span>Facebook</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 border-b border-slate-400 py-4 pl-4">
                        <p className="p-2 bg-black rounded-full"><FaTwitter></FaTwitter></p>
                        <span>Twitter</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 py-4 pl-4">
                        <p className="p-2 bg-black rounded-full"><FaInstagram></FaInstagram></p>
                        <span>Instagram</span>
                    </a>

                </div>
            </div>
            <div className="bg-slate-600 p-2">
                <h2 className="text-xl font-bold mb-4">Q-Zone</h2>
                <div className="flex flex-col gap-4">
                    <a href="#">
                        <img src={qZone1} alt="kids-photo" />
                    </a>
                    <a href="#">
                        <img src={qZone2} alt="kids-photo" />
                    </a>
                    <a href="#">
                        <img src={qZone3} alt="kids-photo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;