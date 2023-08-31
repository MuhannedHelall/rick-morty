import React from "react";
import { Link } from "react-router-dom";
import ICharacter from "../utils/data/character.interface";
import { CiFaceSmile, CiLocationOn, CiFaceFrown } from "react-icons/ci";
import { BsArrowRight, BsGenderFemale, BsGenderMale } from "react-icons/bs";

function Card({ character }: { character: ICharacter }) {
    return (
        <div className="border border-slate-300 rounded-lg shadow-md">
            <img src={character.image} alt="Character" className="w-screen rounded-t-lg" />
            <div className="px-5 py-3">
                <h2 className="font-bold text-lg">
                    {character.name.length > 17
                        ? character.name.slice(0, 17).concat(" .....")
                        : character.name}
                </h2>
                <h4 className="font-bold text-sm py-1 text-sky-500 uppercase">
                    {character.species}
                </h4>
                <h5 className="text-xs pb-2 text-sky-500 uppercase">
                    {character.type
                        ? character.type.length > 25
                            ? character.type.slice(0, 25).concat(" .....")
                            : character.type
                        : "No Type"}
                </h5>
                <hr />
                <h4
                    className={`text-sm py-2 flex items-center ${
                        character.status === "Alive"
                            ? "text-teal-600"
                            : "text-red-600"
                    }`}
                >
                    {character.status === "Alive" ? (
                        <CiFaceSmile className="me-2 text-xl" />
                    ) : (
                        <CiFaceFrown className="me-2 text-xl" />
                    )}
                    {character.status}
                </h4>
                <h4
                    className={`text-sm py-2 flex items-center ${
                        character.gender === "Male"
                            ? "text-sky-500"
                            : "text-pink-500"
                    }`}
                >
                    {character.gender === "Male" ? (
                        <BsGenderMale className="me-2 text-xl" />
                    ) : (
                        <BsGenderFemale className="me-2 text-xl" />
                    )}
                    {character.gender}
                </h4>
                <h4 className="text-sm py-2 mb-3 flex items-center">
                    <CiLocationOn className="me-2 text-xl" />
                    {character.location.name.length > 20
                        ? character.location.name.slice(0, 20).concat(" .....")
                        : character.location.name}
                </h4>
                <Link
                    to={`/character/${character.id}`}
                    className="block rounded text-center text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 py-2"
                >
                    <span className="flex items-center justify-center">
                        Details <BsArrowRight className="ml-2 text-lg" />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Card;
