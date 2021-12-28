import React from "react";
import { GITHUB, LINKED_IN, LOGO_URL } from "../../util/images_and_icons_util";
import * as UrlPath from "../../util/url_paths_util";

export default class Footer extends React.Component {
  render() {
    // switch(this.props.url) {
    //   case UrlPath.SPLASH:
    //     return this.splashFooter();
    //   case UrlPath.USER_SHOW:
    //     return this.splashFooter();
    //   default:
    //     return this.defaultFooter();
    // }

    return this.props.url === UrlPath.SIGNUP_FORM ||
      this.props.url === UrlPath.LOGIN_FORM ||
      this.props.url === UrlPath.FEED ||
      this.props.url.includes(UrlPath.ACTIVITY_TAIL)
      ? null
      : this.splashFooter();
  }

  formFooter() {
    return (
      <div className="form-footer">
        <div className="bottom-level">
          <div className="statement">
            <p>A FEW THINGS YOU SHOULD KNOW</p>
            <p>
              ConnectTheDots is a clone of LinkedIn, the professional networking
              application. ConnectTheDots is not affiliated with LinkedIn in any
              form, and is also not a real platform for any professional
              development/networking. The personal informaton retrieved from this
              application will not be sold or used with malicious intent. All images
              and icons used in this project are for personal use and not for profit.
            </p>
          </div>

          <div className="name-year">2021 Grayson Poon</div>
        </div>
      </div>
    );
  }

  splashFooter() {
    return (
      <div className="splash-footer">
        <div className="top-level">
          <div id="footer-logo">
            <img src={LOGO_URL} />
          </div>

          <div className="lists-container">
            <div className="links-column">
              <ul>
                <li>Personal Links</li>
                <li>
                  <a href={GITHUB} target="_blank">
                    GitHub
                  </a>
                </li>

                <li>
                  <a href={LINKED_IN} target="_blank">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div className="technologies-column-1">
              <ul>
                <li>Technologies</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>AWS S3</li>
                <li>jQuery</li>
                <li>Ruby on Rails</li>
              </ul>
            </div>

            <div className="technologies-column-2">
              <ul>
                <li>HIDE ME</li>
                <li>PostgreSQL</li>
                <li>Git</li>
                <li>JBuilder</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom-level">
          <div className="statement">
            <p>A FEW THINGS YOU SHOULD KNOW</p>
            <p>
              ConnectTheDots is a clone of LinkedIn, the professional networking
              application. ConnectTheDots is not affiliated with LinkedIn in any
              form, and is also not a real platform for any professional
              development/networking. The personal informaton given to
              this application will not be sold or used with malicious intent, 
              however it is still recommended that personal information not be used 
              to experiment with the features of this application. All images 
              and icons used in this project are for personal use and
              not for profit. Enjoy! :)
            </p>
          </div>

          <div className="name-year">2021 Grayson Poon</div>
        </div>
      </div>
    );
  }

  // defaultFooter() {
  //   return (
  //     <div className="default-footer">
  //       <div className="list-1">
  //         <ul>
  //           <li>
  //             <img src={LOGO_URL} />
  //           </li>
  //           <li>Javascript</li>
  //           <li>Javascript</li>
  //           <li>Javascript</li>
  //           <li>ConnectTheDots 2021</li>
  //         </ul>
  //       </div>
  //       <div className="list-2">
  //         <ul>
  //           <li>HIDE ME</li>
  //           <li>Javascript</li>
  //           <li>Javascript</li>
  //           <li>Javascript</li>
  //         </ul>
  //       </div>
  //       <div className="list-3">
  //         <ul>
  //           <li>HIDE ME</li>
  //           <li>Javascript</li>
  //           <li>Javascript</li>
  //           <li>Javascript</li>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }
};