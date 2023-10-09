import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-[724px] max-w-screen-lg mx-auto">
           <div className="flex items-center justify-center flex-col">
                <img src="/404.svg" alt="" className="max-w-3xl"/>
                <Link to='/' className="bg-[#000035] text-white p-4 rounded-lg">Back to Home</Link>
            </div> 
        </div>
    );
};

export default NotFound;