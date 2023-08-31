import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { ToggleDarkMode } from "../redux/mode";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdSunny } from "react-icons/md";
import rickNav from "../utils/imgs/rick-nav.png";
import mortyNav from "../utils/imgs/morty-nav.png";

function Navbar() {
    const { isDark } = useAppSelector((state) => state.Mode);
    const dispatch = useAppDispatch();

    return (
        <nav
            className={`sticky top-0 ${
                isDark ? "bg-slate-700" : "bg-white"
            } flex items-center justify-around h-20 shadow-md`}
        >
            <button className="text-3xl">
                <FaGithub />
            </button>
            <div className="flex items-center justify-center">
                <img src={rickNav} alt="rick-nav" className="me-3 w-8 h-10" />
                <span className="font-bold text-xl">Rick & Morty Wiki</span>
                <img src={mortyNav} alt="morty-nav" className="ml-3 w-8 h-8" />
            </div>
            <button
                className="text-3xl"
                onClick={() => dispatch(ToggleDarkMode())}
            >
                {isDark ? <MdSunny /> : <MdDarkMode />}
            </button>
        </nav>
    );
}

export default Navbar;
