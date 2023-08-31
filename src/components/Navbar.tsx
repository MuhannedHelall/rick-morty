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
            className={`md:sticky md:top-0 ${
                isDark ? "bg-slate-700" : "bg-white"
            } md:flex md:items-center md:justify-around md:h-20 md:shadow-md py-5`}
        >
            <button className="text-3xl w-full md:w-fit">
                <FaGithub className="mx-auto" />
            </button>
            <div className="flex items-center justify-center py-5">
                <img src={rickNav} alt="rick-nav" className="me-3 w-8 h-10" />
                <span className="font-bold md:text-xl text-2xl py-2">Rick & Morty</span>
                <img src={mortyNav} alt="morty-nav" className="ml-3 w-8 h-8" />
            </div>
            <button
                className="text-3xl w-full md:w-fit"
                onClick={() => dispatch(ToggleDarkMode())}
            >
                {isDark ? (
                    <MdSunny className="mx-auto" />
                ) : (
                    <MdDarkMode className="mx-auto" />
                )}
            </button>
        </nav>
    );
}

export default Navbar;
