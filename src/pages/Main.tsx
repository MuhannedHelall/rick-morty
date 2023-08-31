import React, {
    SyntheticEvent,
    useEffect,
    useState,
    lazy,
    Suspense,
} from "react";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import IApi from "../utils/data/api.interface";
import IFilter from "../utils/data/filter.interface";
import Info from "../components/Info";
import Loader from "../components/Loader";

export function delayForDemo(promise: any) {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => promise);
}
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

    const Content = lazy(() => delayForDemo(import("../components/Content")));
    return (
        <div className="mx-14">
            <Filters filter={filter} />
            <Suspense fallback={<Loader />}>
                <Pagination info={api.info} handleEndPoint={handleEndPoint} />
                <Info info={api.info} />
                <Content characters={api.results} />
                <Pagination info={api.info} handleEndPoint={handleEndPoint} />
            </Suspense>
        </div>
    );
}

export default Main;
