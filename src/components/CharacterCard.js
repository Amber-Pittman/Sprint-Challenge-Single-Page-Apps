import React from "react";

export default function CharacterCard({character}) {
  console.log("char card props", character);
  const { image, name, location, origin, } = character;

  return (
    <div>
      <img 
        src={`${image}`} 
        alt={`This is ${name} from Adult Swim's Rick and Morty animated show`} 
        data-pin-nopin="true" 
      />
      <h2>{name}</h2>
      <p>Location: {location.name}</p>
      <p>Origin: {origin.name}</p>
      <br />

      {/* Don't forget to provide Episode Info in each Char Card */}
    </div>
  )
}
