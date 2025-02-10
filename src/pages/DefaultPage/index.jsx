import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import Sidebar from "../../components/Sidebar";

import './style.scss';

export default function DefaultPage() {
    return (
        <>
            <Header 
                titulo='Vamos mudar o mundo' 
                background={'../../../public/assets/sections/intro-mobile.png'} 
            />
            {/* <Newsletter /> */}
            <div className="container">
                <Outlet />
                <Sidebar />
            </div>
        </>
    );
}