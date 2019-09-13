import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";

import styled from "styled-components";


export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />
      {/* <TabNav /> */}
    </main>
  );
}
