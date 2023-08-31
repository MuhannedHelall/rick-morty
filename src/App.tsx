import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "./redux/hooks";

function App() {
    const { isDark } = useAppSelector((state) => state.Mode);

    return (
        <div className={`font-poppins ${isDark && "bg-slate-700 text-white"}`}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default App;
