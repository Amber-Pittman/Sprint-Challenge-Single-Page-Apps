import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [ location, setLocation ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the 
    //     dependancies array!
    const getLoc = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
            setLocation(response.data.results)
        })
        .catch(err => {
          console.error("Locations List Server Error", err)
        })
    }
    getLoc();

  }, []);

  return (
    <section className="grid-view">
      {location.map(location => (
        <LocationCard 
          key={location.id}
          location={location}
          />
      ))}
    </section>
  );
}


