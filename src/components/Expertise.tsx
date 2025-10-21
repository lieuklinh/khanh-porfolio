import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHandshake, faHeart } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const learnerLabels = [
    "Excel", 
    "PowerBI",
    "Python",
    "Microsoft Azure",
    "SQL",
    "Tableau",
    "SAS",
    "R"
];

const practicerLabels = [
    "Data Visualization",
    "Machine Learning",
    "Data Mining",
    "Database Design",
    "Predictive Analytics",
    "Categorical Data Analysis" 
];

const communityLabels = [
    "Project Management",
    "Stakeholder Engagement",
    "Cross-Functional Collaboration",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About Me</h1>
            <p className="about-intro">
                Hi, I'm Khanh!
                <br /><br />
                A rising senior at the University of North Florida with a background in data visualization,
                 machine learning, and predictive analytics using Python, R, SQL, Power BI, and Tableau.
                  With internship experience spanning in research, utilities, and technology, I specialize in 
                  transforming complex ideas into intuitive and impactful solutions.
                <br /><br />
                I believe analytics is more than dashboards and charts—it's about solving problems, 
                telling stories, and driving business outcomes.
                What you should know about me
                <br /><br />
                - Lifelong Learner
                <br /><br />
                - Purposeful Practicer 
                <br /><br />
                - Community-Centered Thinker 
            </p>
            
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faLightbulb} size="3x"/>
                    <h3>Lifelong Learner</h3>
                    <p>At UNF, I've immersed myself in data analytics coursework and computing projects. I explored research in automation and visualization helping me 
                        develop a strong analytical mindset.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Programming languages:</span>
                        {learnerLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHandshake} size="3x"/>
                    <h3>Purposeful Practicer</h3>
                    <p>Through internships at UNF Computing Department and JEA, I've applied data science to real-world 
                    challenges by building ML models, designing dashboards, and automating workflows. These experiences 
                    taught me how to turn data into action, and action into purpose.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Experience with:</span>
                        {practicerLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHeart} size="3x"/>
                    <h3>Community-Centered Thinker</h3>
                    <p>Through AIESEC, I supported youth leadership and internship exchanges across cultures. Grateful for the support I've received, I always look for ways to give back and uplift others.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Soft skills:</span>
                        {communityLabels.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;