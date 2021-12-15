import React from "react";
import { 
  GITHUB, 
  GITHUB_ICON, 
  LINKED_IN, 
  LINKED_IN_ICON, 
  LOGO_URL 
} from "../../util/images_and_icons_util";

const RightFeedBox = () => {
  return (
    <div className="right-feed-box">
      <div className="right-box-main">
        <div id="news">ConnectTheDots News</div>

        <a id="github" href={GITHUB} target="_blank">
          <ul>
            <li>See ConnectTheDots on GitHub</li>
          </ul>
          <img src={GITHUB_ICON} />
        </a>

        <a id="linked-in" href={LINKED_IN} target="_blank">
          <ul>
            <li>View the creator's *real* LinkedIn</li>
          </ul>
          <div>
            <img src={LINKED_IN_ICON} />
          </div>
        </a>
      </div>

      <div className="technologies-logo-container">
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>AWS S3</li>
          <li>jQuery</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Git</li>
          <li>JBuilder</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>

        <div className="logo-year">
          <img src={LOGO_URL} />
          <div>ConnectTheDots 2021</div>
        </div>
      </div>
    </div>
  );
};

export default RightFeedBox;