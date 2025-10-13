import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
export default function Main() {
  return (
    <section id="about" className="container">
<div className="about-section">
        <div className="image-wrapper">
          {/* Use your own image in public/images/me.jpg or keep the URL */}
          <img src="images/me.jpg" alt="Khanh Linh Lieu" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/lieuklinh" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/lieuklinh/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Khanh Linh Lieu</h1>
          <p>Aspiring Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/lieuklinh" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/lieuklinh/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
