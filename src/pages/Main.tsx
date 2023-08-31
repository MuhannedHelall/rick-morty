import React, { SyntheticEvent, useEffect, useState } from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import Content from "../components/Content";
import IApi from "../utils/data/api.interface";
import IFilter from "../utils/data/filter.interface";

function Main() {
    const [api, setApi] = useState<IApi>({
        info: {
            count: 0,
            pages: 0,
            next: "null",
            prev: "null",
        },
        results: [],
    });
    const [endPoint, setEndPoint] = useState<string>(
        "https://rickandmortyapi.com/api/character"
    );
    useEffect(() => {
        fetch(endPoint)
            .then((data) => data.json())
            .then((data) => setApi(data));
    }, [endPoint]);

    function handleEndPoint(s: string) {
        if (s === null) return;
        setEndPoint(s);
    }
    function filter(e: SyntheticEvent, elements: IFilter) {
        e.preventDefault();
        setEndPoint(
            `https://rickandmortyapi.com/api/character/?name=${elements.name}&status=${elements.status}&species=${elements.species}&type=${elements.type}&gender=${elements.gender}`
        );
    }

    return (
        <div className="mx-20">
            <Filters filter={filter} />
            <Pagination info={api.info} handleEndPoint={handleEndPoint} />
            <Content characters={api.results} />
            <Pagination info={api.info} handleEndPoint={handleEndPoint} />
        </div>
    );
}

export default Main;
