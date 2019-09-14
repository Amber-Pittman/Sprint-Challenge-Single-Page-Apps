import React from "react";

export default function EpisodeCard({ episodes }) {
  console.log("episode card props", episodes);
  const { name, episode, air_date } = episodes;

  return (
    <div>
      
      <h2>{name}</h2>
      <p>Episode: {episode.name}</p>
      <p>Air Date: {air_date.name}</p>
    </div>
  )
}
