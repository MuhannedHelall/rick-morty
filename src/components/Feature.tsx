import React from "react";
import EpisodeItem from "./EpisodeItem";

function Feature({ episodes }: { episodes: Array<string> }) {
    return (
        <div className="border col-span-2 shadow-md overflow-y-scroll p-5 h-card">
            <h4 className="text-gray-400">Featured in--</h4>
            {episodes.map(episode => <EpisodeItem episodeUrl={episode} key={episode}/>)}
        </div>
    );
}

export default Feature;
