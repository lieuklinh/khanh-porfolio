import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

export default function Main() {
  return (
    <section id="about" className="container">
      <div className="about-section">
        {/* LEFT SIDE: Name and Picture */}
        <div className="left-side">
          <div className="image-wrapper">
            <img src="/images/me.jpg" alt="Khanh Linh Lieu" />
          </div>
          <h1>Khanh Linh Lieu</h1>
          <p className="title">Aspiring Data Analyst</p>
          
          <div className="social_icons">
            <a href="https://github.com/lieuklinh" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/lieuklinh/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Introduction */}
        <div className="right-side">
          <h2>About Me</h2>
          <p>
            Hi there, I am Khanh Linh Lieu! I am a rising senior at the University of North Florida 
            with a background in data visualization, machine learning, and predictive analytics using 
            Python, R, SQL, Power BI, and Tableau.
          </p>
          <p>
            With internship experience spanning in research, utilities, and technology, I specialize 
            in transforming complex ideas into intuitive and impactful solutions.
          </p>
          <p>
            I believe analytics is more than dashboards and charts—it's about solving problems, 
            telling stories, and driving business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
