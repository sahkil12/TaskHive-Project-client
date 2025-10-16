import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>404 Not Found - Task Hive</title>    
            </Helmet>
            <Navbar></Navbar>
            <div className="my-8 min-h-[calc(100vh-432px)] flex flex-col items-center justify-center">
                <Link to={'/'} className="text-xl rounded-full px-6 btn py-6 btn-primary flex gap-2 items-center mt-7 pop text-center">  <FaArrowLeftLong size={23} /> Back to home</Link>
                <img src="/404.gif" className="w-fit p-6 sm:p-10" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;