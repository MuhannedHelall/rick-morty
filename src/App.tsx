import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
    const [isDark, setDark] = useState<Boolean>(true);
    function ToggleDarkMode() {
        setDark((prev) => !prev);
    }
    return (
        <div className={`font-poppins ${isDark && "bg-slate-700 text-white"}`}>
            <Navbar isDark={isDark} ToggleDarkMode={ToggleDarkMode} />
            <Outlet />
        </div>
    );
}

export default App;
