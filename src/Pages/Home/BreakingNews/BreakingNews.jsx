import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex items-center bg-base-200 p-2">
                <button className="btn bg-red-800">Latest</button>
                <div className="">
                <Marquee gradientColor="black" gradient= 'true'>
                    <Link><p className="mr-8 hover:text-emerald-400">Lorem ipsum dolor sit amet, consectetur elit...</p></Link>
                    <Link><p className="mr-8 hover:text-emerald-400"> sit adipisicing elit Lorem ipsum dolor...</p></Link>
                    <Link><p className="mr-8 hover:text-emerald-400"> consectetur Lorem ipsum dolor sit adipisicing elit...</p></Link>
                </Marquee>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;