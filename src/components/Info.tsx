import React from "react";
interface IProps {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
}
function Info({ info }: IProps) {
    return (
        <div className="text-center">
            <p className="text-sm">• {info.count} characters •</p>
            <p className="text-xs">Showing {20}</p>
        </div>
    );
}

export default Info;
