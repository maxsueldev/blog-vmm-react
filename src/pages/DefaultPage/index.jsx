import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import Sidebar from "../../components/Sidebar";
import SocialIcons from "../../components/SocialIcons";
import Footer from "../../components/Footer";
import './style.scss';

export default function DefaultPage() {
    return (
        <>
            <Header />
            {/* <Newsletter /> */}
            <div className="container">
                <Outlet />
                <Sidebar />
            </div>
            <SocialIcons />
            <Footer />
        </>
    );
}