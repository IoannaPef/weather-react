import React from "react";
import Weather from "./Weather";


import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="container-fluid p-2 weather-holder">
        <Weather defaultCity="Zug" />
        <footer>
          This project was coded by Ioanna Karagkani and is {""}
          <a
            className="link"
            href="https://github.com/IoannaPef/weather-react"
            rel="noopener noreferrer"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and {""}
          <a
            className="link"
            href="https://stately-paletas-d37e53.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
