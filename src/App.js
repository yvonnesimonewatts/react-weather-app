import './App.css';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
  
        <footer>
          <Icon.Github className="Github-icon"/>{" "}
        <strong>
          <a
            className="Footer-link"
            href="https://github.com/yvonnesimonewatts/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
        </strong>
        by Yvonne Simone
      </footer>
      </div>

    </div>
  );
}

export default App;
