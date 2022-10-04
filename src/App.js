import React from "react";
import "./App.css";
import Game from "./components/Game.js"
import Header from "./components/Header.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Rock Paper Scissors Lizard Spock</h1>
        <Header />
        <Game />
      </div>
    </div>
  );
}
