import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { NewsContext } from "../../AuthProvider/AuthProvider";

const NewsDetail = () => {

    const newsId = useParams();
    const news = useLoaderData();
    const { user } = useContext(NewsContext);

    const matchedNews = news.find(item => item._id == newsId.id);
    console.log(matchedNews);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid lg:grid-cols-4 gap-2">
                {
                    user ?
                        <div className="lg:col-span-3">
                            <img src={matchedNews.image_url} alt="" />
                            <h2 className="mt-4 text-xl font-bold">{matchedNews.title}</h2>
                        </div>
                        :
                        <div className="lg:col-span-3">
                            <h2 className="text-pink-400 text-2xl text-center">Login to see news</h2>
                        </div>

                }
                <div className="lg:col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>


        </div>
    );
};

export default NewsDetail;