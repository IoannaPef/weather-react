import React from "react";
import Weather from "./Weather";


import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zug"/>
        <footer>
          <a
            href="https://github.com/IoannaPef/weather-react"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code,
          </a>{" "}
          by Ioanna Karagkani
        </footer>
      </div>
    </div>
  );
}

export default App;
