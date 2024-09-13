import { useState, useEffect, useContext } from "react";
import NewsCategory from "../NewsCategory/NewsCategory";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import LeftNav from "./LeftNav/LeftNav";
import { NewsContext } from "../../AuthProvider/AuthProvider";




const Home = () => {

    const [news, setNews] = useState([]);
    const [displayNews, setDisplayNews] = useState([]);
    const { loading, user } = useContext(NewsContext);

    // getting news
    useEffect(() => {
        fetch('news.json')
            .then((res) => res.json())
            .then((data) => {
                setNews(data)
                setDisplayNews(data) // to set default display all news
            })
            .catch((error) => console.error(error))
    }, [])
    const displayCategoryNews = (categoryId) => {
        if (categoryId == 0) {
            setDisplayNews(news)
        } else {
            const matchedId = news.filter(item => item.category_id == categoryId); // sort by category
            setDisplayNews(matchedId);
        }
    }
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center mt-12">
                <div className="md:col-span-1">
                    <LeftNav displayCategoryNews={displayCategoryNews}></LeftNav>
                </div>
                <div className="md:col-span-2">
                    {
                        loading ? <h2>Loading..</h2> :
                            <NewsCategory news={displayNews}></NewsCategory>
                    }
                </div>

                <div className="md:col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;