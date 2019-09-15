import React from "react";
import { Card, Icon} from "semantic-ui-react";

export default function EpisodeCard(episodes) { 
  console.log("episode card props", episodes); 
  const {name, air_date, characters} = episodes.episode; // make sure to add .episode to make this render

  return (
    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Episode: {name}</Card.Description>
            <Card.Description>Air Date: {air_date}</Card.Description>
            <hr />
            <Card.Meta>
                <Icon name="users" />
                {`${characters.length} Characters`}
            </Card.Meta>
        </Card.Content>
    </Card>
  )
}
