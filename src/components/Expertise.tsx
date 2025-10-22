import React from "react";
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Education</h1>
            
            {/* White box container */}
            <div className="education-box">
                <div className="education-content">
                    {/* University name - bold, not italic */}
                    <h2 className="university-name">University of North Florida</h2>
                    
                    {/* Degree - black color */}
                    <p className="degree">Bachelor of Science, Data Science - Honors Program</p>
                    
                    {/* Expected Graduation - smaller, gold */}
                    <p className="date-range">Expected Graduation: December 2026</p>
                    
                    {/* SKILLS - italics */}
                    <div className="skills-list">
                        <p className="skill-line">
                            <em>•  Data & Programming languages:</em> Excel, PowerBI, Python, SQL, R, Tableau, SAS, Microsoft Azure, Java, C++.
                        </p>

                        <p className="skill-line">
                            <em>• Experience with:</em> Data Visualization, Data Mining, Database Design, AI & Machine Learning Algorithms, Statistical model building, Predictive & Prescriptive analysis, Data Structures, Categorical Data Analysis, Combinatorics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;