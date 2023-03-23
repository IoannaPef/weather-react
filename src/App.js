import Weather from "./Weather";

import './App.css';
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="App-wraper">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>
        <Weather />
      </div>
      <p>
        <a href="https://github.com/IoannaPef/weather-react">
          Open-source code,
        </a>{" "}
        by Ioanna Karagkani
      </p>
    </div>
  );
}

export default App;
