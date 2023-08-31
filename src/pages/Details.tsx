import React, { useState, useEffect, Suspense, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import ICharacter from "../utils/data/character.interface";
import Loader from "../components/Loader";
import { delayForDemo } from "./Main";

function Details() {
    const { id } = useParams();
    const [character, setCharacter] = useState<ICharacter>({
        id: 3,
        name: "string",
        status: "string",
        species: "string",
        type: "string",
        gender: "string",
        origin: {
            name: "string",
            url: "string",
        },
        location: {
            name: "string",
            url: "string",
        },
        image: "string",
        episode: [],
        url: "string",
        created: new Date(),
    });
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((data) => data.json())
            .then((res) => setCharacter(res));
    }, [id]);

    const CardDetails = lazy(() =>
        delayForDemo(import("../components/CardDetails"))
    );
    const Feature = lazy(() => delayForDemo(import("../components/Feature")));
    return (
        <>
            <Link to={"/"} className="text-sky-500 hover:text-sky-600 px-5">
                {"<<"} Go Back
            </Link>
            <Suspense fallback={<Loader />}>
                <div className="w-10/12 md:w-8/12 xl:w-6/12 mx-auto lg:grid lg:grid-cols-5 lg:gap-x-5 py-10 px-5 h-full">
                    <CardDetails character={character} />
                    <Feature episodes={character.episode} />
                </div>
            </Suspense>
        </>
    );
}

export default Details;
