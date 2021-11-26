import React from "react";
import { LOGO_URL } from "../../util/logo_util";
import * as UrlPath from "../../util/url_paths_util";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let url = this.props.location.pathname;

    switch(url) {
      case UrlPath.SPLASH:
        return this.splashFooter();
      default:
        return this.defaultFooter();
    }
  }

  defaultFooter() {
    return (
      <div className="default-footer">
        ConnectTheDots Logo (this is the default footer)
      </div>
    )
  }

  splashFooter() {
    return (
      <div className="splash-footer">
        <div id="footer-logo">
          <img src={LOGO_URL} />
        </div>

        <div className="lists-container">
          <div className="links-column">
            <ul>
              <li>Personal Links</li>
              <li><a href="">GitHub</a></li>
              <li><a href="">LinkedIn</a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
          
          <div className="technologies-column-1">
            <ul>
              <li>Technologies</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>AWS</li>
              <li>jQuery</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>

          <div className="technologies-column-2">
            <ul>
              <li>HIDE ME</li>
              <li>PostgreSQL</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>JBuilder</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};