import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CardDetails from "./../components/CardDetails";
import Feature from "../components/Feature";
import ICharacter from "../utils/data/character.interface";

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

    return (
        <>
            <Link to={"/"} className="text-sky-500 hover:text-sky-600 px-5">
                {"<<"} Go Back
            </Link>
            <div className="w-6/12 mx-auto grid grid-cols-5 gap-x-5 py-10 h-stretch">
                <CardDetails character={character} />
                <Feature episodes={character.episode} />
            </div>
        </>
    );
}

export default Details;
