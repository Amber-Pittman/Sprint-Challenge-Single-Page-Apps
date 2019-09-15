import React from "react";
import { Card, Icon} from "semantic-ui-react";

export default function EpisodeCard(episodes) { //without {} I see info in console
  console.log("episode card props", episodes); // doesn't acknowledge episodes here
  const {name, episode, air_date, characters} = episodes;

  return (
    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>Episode: {episode.name}</Card.Description>
            <Card.Description>Air Date: {air_date.name}</Card.Description>
            <hr />
            <Card.Meta>
                <Icon name="users" />
                {`${characters.length} Characters`}
            </Card.Meta>
        </Card.Content>
    </Card>
  )
}
