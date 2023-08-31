import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const getPageNumber = (s: string) => {
    if (s === null) return 0;
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "=") {
            index = i + 1;
            break;
        }
    }
    if (s.substr(index, 2).includes("&")) return Number(s.substr(index, 1));
    else return Number(s.substr(index, 2));
};

interface IProps {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    handleEndPoint(s: string): void;
}

function Pagination({ info, handleEndPoint }: IProps) {
    const handleNextClick = () => {
        handleEndPoint(info.next);
    };
    const handlePrevClick = () => {
        handleEndPoint(info.prev);
    };

    return (
        <>
            <div className="flex justify-center text-black pb-5">
                <button
                    className="border p-2 bg-gray-200 hover:bg-gray-300 text-sm rounded-xl"
                    onClick={handlePrevClick}
                >
                    <BsArrowLeft />
                </button>
                <span className="mx-2 border p-2 bg-gray-200 text-sm rounded-xl">
                    {getPageNumber(info.prev) + 1}/{info.pages}
                </span>
                <button
                    className="border p-2 bg-gray-200 hover:bg-gray-300 text-sm rounded-xl"
                    onClick={handleNextClick}
                >
                    <BsArrowRight />
                </button>
            </div>
        </>
    );
}

export default Pagination;
