import React from "react";
import "./App.css";
import Game from "./components/Game.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Rock Paper Scissors lizard Spock</h1>
        </header>
        <Game />
        <Footer />
      </div>
    </div>
  );
}
