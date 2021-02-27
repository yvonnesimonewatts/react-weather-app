import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'reactjs-popup/dist/index.css';
import FooterModal from './FooterModal'
import './Footer.css';

export default function Footer() {
  return(
    <div className="Footer">
      <ul className="footer-links"> 
      <li className="about">
        <span>
          <Icon.CodeSlash className="icon-codeslash"/> {" "}
        </span>
        <span><FooterModal/></span>
      </li>
        <li className="github">
          <span>
            <Icon.Github className="icon-github"/> {" "}
          </span>
            <span> 
              <a
                href="https://github.com/yvonnesimonewatts/react-weather-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                  GitHub
              </a>
            </span>
        </li>
      </ul>
    </div>
  );
}