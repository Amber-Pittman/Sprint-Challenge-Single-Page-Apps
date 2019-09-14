import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function CharacterCard({character}) {
  console.log("char card props", character);
  const { image, name, location, origin, } = character;

  return (
    <Card>
      <Image 
        src={`${image}`} 
        alt={`This is ${name} from Adult Swim's Rick and Morty animated show`} 
        data-pin-nopin="true" 
      />
      <Card.Header> {name} </Card.Header>
      <Card.Description>Location: {location.name}</Card.Description>
      <Card.Description>Origin: {origin.name}</Card.Description>
      <br />
      
      {/* Don't forget to provide Episode Info in each Char Card */}
    </Card>
  )
}
