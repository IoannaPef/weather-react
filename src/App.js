import React from "react";
import Weather from "./Weather";

import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <footer className="App-header">
          <Weather />
        </footer>
        <a
          href="https://github.com/IoannaPef/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          Open-source code,
        </a>{" "}
        by Ioanna Karagkani
      </div>
    </div>
  );
}

export default App;
