import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard({ location }) {
  console.log(location);
  const {name, type, dimension, residents} = location;

  return (
    <Card>
      <h2>{name}</h2>
      <p> {`${type} - ${dimension}`} </p>
      <p> {`${residents.length} Residents`} </p> 
    </Card>
  );
}
