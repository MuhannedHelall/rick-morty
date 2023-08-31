import React from "react";
import Card from "./Card";
import ICharacter from "../utils/data/character.interface";

function Content({ characters }: { characters: ICharacter[] }) {
    return (
        <>
            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-5">
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </>
    );
}

export default Content;
