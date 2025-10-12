import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
           <header className="sticky top-1 z-50 ">
             <Navbar></Navbar>
           </header>
            <main className="min-h-[calc(100vh-403px)]">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;