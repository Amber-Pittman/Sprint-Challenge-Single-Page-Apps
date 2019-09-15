import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function LocationCard({ location }) {
  console.log(location);
  const {name, type, dimension, residents} = location;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description> {`${type} - ${dimension}`} </Card.Description>
        <hr />
        <Card.Meta>
            <Icon name="users" />
            {`${residents.length} Residents`} 
          </Card.Meta> 
      </Card.Content>
    </Card>
  );
}
