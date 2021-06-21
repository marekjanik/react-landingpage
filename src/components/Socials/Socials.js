import React from "react";
import { Component } from "react";
import { SocialItems } from "./SocialItems";
import "../Socials/Socials.css";

class Socials extends Component {
  render() {
    return (
      <div className="socials-container">
        <ul className="social-list">
          {SocialItems.map((item, index) => {
            return (
              <li key={index} className="social-item">
                <a className={item.cName} href={item.url}>
                  {item.social}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Socials;
