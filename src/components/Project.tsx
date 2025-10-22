import React from "react";
import mock07 from "../assets/images/project1.jpg";
import mock08 from "../assets/images/project2.jpg";
import mock09 from "../assets/images/project3.jpg";
import mock10 from "../assets/images/project4.jpg";
import "../assets/styles/Project.scss";

function Project() {
  const projects = [
    {
      title: "Financial Analysis Dashboard",
      img: mock10,
      link: "https://drive.google.com/drive/folders/1Alav03M8V789F29rU6EgVk9wrJVoxpRY",
      description:
        "Comprehensive financial analysis of Vinaseed's performance from 2018–2021, examining balance sheets, income statements, and key ratios to assess the company's resilience through climate challenges and the COVID-19 pandemic."
    },
    {
      title: "Predicting Land Surface Temperature Trends",
      img: mock09,
      link: "https://drive.google.com/drive/folders/1ElCfp5vcWr-DLX-F53MT9Ya43ZlT3Q90",
      description:
        "Analyzed decades of satellite data to reveal long-term global warming patterns with Python, confirming a 34°F temperature increase over 24 years. Developed an interactive user interface to visualize yearly temperature distributions based on selected location and time, and provide future climate pattern prediction."
    },
    {
      title: "Sales Transformation Dashboard",
      img: mock08,
      link: "https://drive.google.com/drive/folders/1itpgrbmSbmjB7fqzzbdKnsh1nauHK8-O",
      description:
        "This Power BI project uncovers a sales peak and shifting trends — with store sales falling, online and Asian markets booming — and recommends ramping up e-commerce, targeting Asia, and launching bold year-end promos to drive explosive growth."
    },
    {
      title: "Skittle – Rebranding the Nature",
      img: mock07,
      link: "https://drive.google.com/drive/folders/1zeKt8EHPxVDR2L1NYT8xjYNNnvsCJmzt",
      description:
        "This project rebrands Skittles into “PureBites,” a fun and eco-friendly twist that uses natural ingredients, recyclable packaging, and supports ocean clean-up efforts — giving candy lovers a healthier way to “taste the rainbow.”"
    }
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.img} className="zoom" alt={project.title} width="100%" />
            </a>
            <h2 className="project-title">
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
