
import NewsCard from "../Home/NewsCard/NewsCard";


const NewsCategory = ({news}) => {

    return (
        <div>
            <h2 className="text-xl text-left mb-8">Dragon News Home</h2>
            <div className="space-y-8">
                {
                    news.length > 0 ? 
                    news.map(item => <NewsCard key={item._id} item={item}></NewsCard>)
                    :
                    <h2 className="text-pink-300">No news in this category yet.. <br /> try other categories</h2>
                }
            </div>
        </div>
    );
};

export default NewsCategory;