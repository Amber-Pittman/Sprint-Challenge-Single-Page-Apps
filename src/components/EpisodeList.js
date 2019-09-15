import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList(props) {
  // TODO: Add useState to track data from useEffect
  const [ episodes, setEpisodes ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the 
    //     dependancies array!
    const getEpisode = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
            console.log(response.data.results, "Char Info in Episode List") 
            setEpisodes(response.data.results); // episode is inside results
        })
        .catch(err => {
          console.error("Episode List Server Error", err)
        })
    }
    getEpisode();
  }, []);

  return (
    <section className="grid-view">
      {episodes.map(epi => (
        <EpisodeCard 
          key={epi.id}
          episode={epi}
          />
      ))}
    </section>
  );
}
