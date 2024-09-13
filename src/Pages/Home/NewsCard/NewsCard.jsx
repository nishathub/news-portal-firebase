import { Link } from "react-router-dom";

const NewsCard = ({item}) => {
    const {_id, author, image_url, details, title, total_view, rating} = item;
    return (
        <div className="border-slate-700 border space-y-4 p-4 text-left">
            {/* card-top */}
            <div className="flex justify-between items-center p-4 bg-slate-700 rounded-t">
                {/* card-top-left */}
                <div className="flex gap-2 text-left items-center">
                    <div><img className="h-8 rounded-full" src={author.img} alt="author-image" /></div>
                    <div>
                        <h2 className="font-bold text-sm">{author.name}</h2>
                        <p className="text-xs">{author?.published_date}</p>
                    </div>
                </div>
                {/* card-top-right */}
                <div className="flex gap-2">
                    <h4>icon1</h4>
                    <h4>icon2</h4>
                </div>
            </div>
            {/* card-middle */}
            <div className="space-y-4">
                <div><h2 className="font-bold">{title}</h2></div>
                <div><img src={image_url} alt="news-image" /></div>
                <div>
                    <p className="text-sm text-slate-400">{details.slice(0, 200)} . . .</p>
                    <Link to={`/NewsDetail/${_id}`}><span className="text-orange-700 text-sm font-semibold">Read More</span></Link>
                </div>
            </div>
            {/* card-bottom */}
            <div className="flex py-4 border-t border-slate-400 justify-between items-center">
                <div>rating : {rating.number}</div>
                <div>view : {total_view}</div>
            </div>
        </div>
    );
};

export default NewsCard;