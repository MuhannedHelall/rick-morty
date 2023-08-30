import React from "react";
import Card from "./Card";
import ICharacter from "../utils/data/character.interface";

function Content({ characters }: { characters: ICharacter[] }) {
    return (
        <div className="grid grid-cols-5 gap-6 my-10">
            {characters.map((character) => (
                <Card key={character.id} character={character} />
            ))}
        </div>
    );
}

export default Content;
