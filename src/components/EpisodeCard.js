import React from "react";
import { Card, Icon} from "semantic-ui-react";

export default function EpisodeCard({ episodes }) {
  console.log("episode card props", episodes); // doesn't acknowledge episodes here
  const {name, episode, air_date} = episodes;

  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Description>Episode: {episode.name}</Card.Description>
      <Card.Description>Air Date: {air_date.name}</Card.Description>

      <Icon name="users" ><p>Characters</p></Icon>
    </Card>
  )
}
