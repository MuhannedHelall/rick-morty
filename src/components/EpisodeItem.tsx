import React, { useState } from "react";
import IEpisode from "../utils/data/episode.interface";
import { BsArrowRight } from "react-icons/bs";

function EpisodeItem({ episodeUrl }: { episodeUrl: string }) {
    const [episode, setEpisode] = useState<IEpisode>({
        id: 2,
        name: "string",
        air_date: "string",
        episode: "string",
        characters: [],
        url: "string",
        created: new Date(),
    });
    fetch(episodeUrl)
        .then((data) => data.json())
        .then((res) => setEpisode(res));
    return (
        <div className="my-2">
            <h4 className="text-sm flex items-center">
                <BsArrowRight className="me-1" />
                {episode.episode} - {`"${episode.name}"`}
            </h4>
            <h5 className="text-xs text-gray-500">{episode.air_date}</h5>
        </div>
    );
}

export default EpisodeItem;
