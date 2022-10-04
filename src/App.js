import React from "react";
import "./App.css";
import Game from "./components/Game.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Rock Paper Scissors Lizard Spock</h1>
        <Header />
        <Game />
        <Footer />
      </div>
    </div>
  );
}
