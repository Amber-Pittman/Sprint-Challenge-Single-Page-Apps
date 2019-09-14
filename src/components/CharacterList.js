import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ character, setCharacter ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the 
    //     dependencies array!
    const getChar = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setCharacter(response.data.results)
        })
        .catch(err => {
          console.error("Character List Server Error", err)
        })
    }
    getChar();

  }, []);

  return (
    <section className="character-list grid-view">
      {character.map(char => (
        <CharacterCard 
          key={char.id}
          character={char}
          />
      ))}
    </section>
  );
}
