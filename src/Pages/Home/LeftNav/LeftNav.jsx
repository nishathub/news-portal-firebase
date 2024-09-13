import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = ({displayCategoryNews}) => {
   
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        fetch('categories.json')
        .then((res) => res.json())
        .then((data) => setCategory(data))
        .catch((error) => console.error(error))
    },[])
    
    return (
        <div className="text-left">
            <h2 className="text-xl mb-8">All Category</h2>
            <ul className="pl-8 text-lg space-y-2 menu">
                {
                    category.map(item => <li onClick={()=> displayCategoryNews(item.id)} className='block cursor-pointer' key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default LeftNav;