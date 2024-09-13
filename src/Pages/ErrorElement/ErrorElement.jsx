import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <Link to={'/'}><button>Home</button></Link>
        </div>
    );
};

export default ErrorElement;