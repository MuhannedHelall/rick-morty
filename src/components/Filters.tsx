import React, { SyntheticEvent, useState } from "react";
import IFilter from "../utils/data/filter.interface";

interface IProps {
    filter(e: SyntheticEvent, elements: IFilter): void;
}

function Filters({ filter }: IProps) {
    const [elements, setElements] = useState<IFilter>({
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
    });
    function handleReset() {
        setElements({
            name: "",
            status: "",
            species: "",
            type: "",
            gender: "",
        });
    }

    return (
        <div className="my-14 ">
            <h1 className="text-center font-bold text-3xl mb-10">
                Find Rick & Morty Characters
            </h1>
            <form
                className="grid grid-cols-6 gap-5 text-black"
                onSubmit={(e) => filter(e, elements)}
            >
                <input
                    type="text"
                    className="border p-1 shadow-sm"
                    placeholder="Name"
                    value={elements.name}
                    onChange={(e) =>
                        setElements({ ...elements, name: e.target.value })
                    }
                />
                <select
                    className="border p-1 shadow-sm"
                    value={elements.status}
                    onChange={(e) =>
                        setElements({ ...elements, status: e.target.value })
                    }
                >
                    <option value={""}>Status</option>
                    <option value={"Alive"}>Alive</option>
                    <option value={"Dead"}>Dead</option>
                    <option value={"unknown"}>unknown</option>
                </select>
                <select
                    className="border p-1 shadow-sm"
                    value={elements.species}
                    onChange={(e) =>
                        setElements({ ...elements, species: e.target.value })
                    }
                >
                    <option value={""}>Species</option>
                    <option value={"Human"}>Human</option>
                    <option value={"Alien"}>Alien</option>
                    <option value={"Humanoid"}>Humanoid</option>
                    <option value={"Poopybutthole"}>Poopybutthole</option>
                    <option value={"Mythological"}>Mythological</option>
                    <option value={"Unkown"}>Unkown</option>
                    <option value={"Animal"}>Animal</option>
                    <option value={"Disease"}>Disease</option>
                    <option value={"Robot"}>Robot</option>
                    <option value={"Cronenberg"}>Cronenberg</option>
                    <option value={"Planet"}>Planet</option>
                </select>
                <select
                    className="border p-1 shadow-sm"
                    value={elements.type}
                    onChange={(e) =>
                        setElements({ ...elements, type: e.target.value })
                    }
                >
                    <option value={""}>Type</option>
                </select>
                <select
                    className="border p-1 shadow-sm"
                    value={elements.gender}
                    onChange={(e) =>
                        setElements({ ...elements, gender: e.target.value })
                    }
                >
                    <option>Gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Genderless"}>Genderless</option>
                    <option value={"unknown"}>unknown</option>
                </select>
                <div className="grid grid-cols-4 space-x-3 text-white">
                    <button
                        type="submit"
                        className="col-span-3 bg-sky-700 hover:bg-sky-800 active:bg-sky-900 rounded"
                    >
                        Filter
                    </button>
                    <button
                        type="reset"
                        className="col-span-1 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded text-xl"
                        onClick={handleReset}
                    >
                        &times;
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Filters;
