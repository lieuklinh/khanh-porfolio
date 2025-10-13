import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/project1.jpg';
import mock08 from '../assets/images/project2.jpg';
import mock09 from '../assets/images/project3.jpg';
import mock10 from '../assets/images/project4.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmahhte.club/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmahhte.club/" target="_blank" rel="noreferrer"><h2>Financial Analysis Dashboard</h2></a>
                <p>Comprehensive financial analysis of Vinaseed's performance from 2018-2021, examining balance sheets, income statements, and key ratios to assess the company's resilience through climate challenges and the COVID-19 pandemic.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itchhh.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itchhh.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Predicting Land Surface Temperature Trends</h2></a>
                <p>Analyzed decades of satellite data to reveal long-term global warming patterns with Python, confirming a 34°F temperature increase over 24 years. Developed an interactive user interface to visualize yearly temperature distributions based on selected location and time, and provide future climate pattern prediction.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itchtt.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itchtt.io/spacecraft" target="_blank" rel="noreferrer"><h2>Sales Transformation Dashboard</h2></a>
                <p>This Power BI project uncovers a sales peak and shifting trends — with store sales falling, online and Asian markets booming — and recommends ramping up e-commerce, targeting Asia, and launching bold year-end promos to drive explosive growth.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearttn.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearttn.com/" target="_blank" rel="noreferrer"><h2>Skittle- Rebranding the Nature</h2></a>
                <p>This project rebrands Skittles into “PureBites,” a fun and eco-friendly twist that uses natural ingredients, recyclable packaging, and supports ocean clean-up efforts — giving candy lovers a healthier way to “taste the rainbow.”</p>
            </div>
        </div>
    </div>
    );
}

export default Project;