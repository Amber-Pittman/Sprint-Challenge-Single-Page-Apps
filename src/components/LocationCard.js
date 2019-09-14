import React from "react";

export default function LocationCard({ location }) {
  console.log(location);
  const {name, type, dimension, residents} = location;

  return (
    <div>
      <h2>{name}</h2>
      <p> {`${type} - ${dimension}`} </p>
      <p> {`${residents.length} Residents`} </p> 
    </div>
  );
}
