import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";
import Footer from "./components/Footer";

function App() {
    const { isDark } = useAppSelector((state) => state.Mode);

    return (
        <div className={`font-poppins ${isDark && "bg-slate-700 text-white"}`}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
