import './App.css';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="London"/>
  
        <footer>
          <Icon.Github className="icon-github"/>{" "}
        <strong>
          <a
            className="footer-link"
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
