import React from 'react';
import Activity from "./components/Activity"
import styled from "styled-components";

import './App.css';

const Title = styled.h1`
  Font-size: 3.8rem;
  color: white;
  margin-bottom: 3rem;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
`

function App() {
  return (
    <div className="App">
      <Title>Why be bored? Generate a random activity!</Title>
      <Activity />
    </div>
  );
}

export default App;
