import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Footer.css';

export default function FooterModal() {
  return (
    <Popup trigger={<a className="modal-link">About</a>} modal>
      <div className="FooterModal">
        <p>
          <strong>ReactWeatherApp</strong> <br /> <Icon.CodeSlash className="icon-codeslash"/> with <Icon.SuitHeartFill className="icon-heartfill"/> by Yvonne Simone.
        </p>
          <hr />
              <div className="credits">
                Credits
              </div>
                <div className="links">
                  <ul>
                    <li>
                      <a
                        href="https://openweathermap.org/api"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                      OpenWeatherMap API
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://fonts.google.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                          Google Fonts
                      </a> 
                    </li>
                    <li>
                      <a 
                        href="https://www.flaticon.com/authors/srip" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                          Icons by srip
                      </a> 
                    </li>
                    
                    <li>
                      <a 
                        href="https://www.npmjs.com/package/reactjs-popup" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                          Reactjs Popup
                      </a> 
                    </li>
                    <li>
                      <a 
                        href="https://getbootstrap.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                          Bootstrap
                      </a> 
                    </li>
                    <li>
                      <a 
                        href="https://www.netlify.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                          Netlify
                      </a> 
                    </li>
                  </ul>
                </div>
      </div>
    </Popup>
  );
}
