import React from "react";
import { CiFaceSmile, CiLocationOn, CiFaceFrown } from "react-icons/ci";
import {
    BsGenderMale,
    BsGenderFemale,
    BsFillPersonFill,
    BsFillPersonXFill,
} from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";
import ICharacter from "../utils/data/character.interface";

function CardDetails({ character }: { character: ICharacter }) {
    return (
        <div className="col-span-3 border rounded-md shadow-md p-5 h-card">
            <div className="text-center border-b py-2">
                <img
                    src={character.image}
                    alt="Character Image"
                    className="rounded-full mx-auto mb-5 w-52"
                />
                <h2 className="font-bold text-2xl">{character.name}</h2>
            </div>
            <div className="py-2">
                <h4 className="text-gray-400 pt-2">info---</h4>
                <div className="pt-2 flex items-center">
                    <span className="font-bold">Status: </span>
                    <div
                        className={`flex items-center ${
                            character.status === "Alive"
                                ? "text-teal-600"
                                : "text-red-600"
                        }`}
                    >
                        {character.status === "Alive" ? (
                            <CiFaceSmile className="text-xl ml-2 me-1" />
                        ) : (
                            <CiFaceFrown className="text-xl ml-2 me-1" />
                        )}
                        {character.status}
                    </div>
                </div>
                <div className="pt-2 flex items-center">
                    <span className="font-bold">Gender: </span>
                    <div
                        className={`flex items-center ${
                            character.gender === "Male"
                                ? "text-sky-500"
                                : "text-pink-500"
                        }`}
                    >
                        {character.gender === "Male" ? (
                            <BsGenderMale className="text-xl ml-2 me-1" />
                        ) : (
                            <BsGenderFemale className="text-xl ml-2 me-1" />
                        )}

                        {character.gender}
                    </div>
                </div>
                <div className="pt-2 flex items-center">
                    <span className="font-bold">Species: </span>
                    <div className="flex items-center">
                        <BsFillPersonFill className="text-xl ml-2 me-1" />
                        {character.species}
                    </div>
                </div>
                <div className="pt-2 flex items-center">
                    <span className="font-bold">Type: </span>
                    <div className="flex items-center">
                        <BsFillPersonXFill className="text-xl ml-2 me-1" />
                        {character.type ? character.type : "No Type"}
                    </div>
                </div>
                <div className="pt-2 flex items-center">
                    <span className="font-bold">Origin: </span>
                    <div className="flex items-center">
                        <GiEarthAmerica className="text-xl ml-2 me-1" />
                        {character.origin.name}
                    </div>
                </div>
                <div className="pt-2 flex items-center">
                    <span className="font-bold">Location: </span>
                    <div className="flex items-center">
                        <CiLocationOn className="text-xl ml-2 me-1" />
                        {character.location.name}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
