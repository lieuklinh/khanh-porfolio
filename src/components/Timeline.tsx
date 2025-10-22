import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">University of North Florida - Jacksonville, FL</h4>
            <p>
              • Collected and structured data from 168 interviews and 10,000+ medical research abstracts using the RDoC framework, 
              preparing inputs for large-scale text mining and machine learning analysis.
            </p>
            <p>
              • Developed and applied machine learning classification models to automate data labeling of 8 mental health patterns, 
              uncovering 3 previously unknown trends and reducing manual effort by over 60%.
            </p>
            <p>
              • Designed ad-hoc Power BI dashboards to visualize text mining results on longitudinal trends, symptom frequency, 
              and topic clusters, enabling psychologists to interpret findings efficiently and increase analysis productivity by 67%.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Vice President</h3>
            <h4 className="vertical-timeline-element-subtitle">UNF Health Informatics & Analytics Club (HIAC) - Jacksonville, FL</h4>
            <p>
              • Oversaw club operations and executive initiatives, coordinating cross-team efforts to support 50+ active members 
              and drive a 25% increase in engagement.
            </p>
            <p>
              • Led planning and execution of 10+ events, networking sessions, and workshops that connected students with industry 
              professionals and UNF faculty, strengthening career readiness and academic involvement.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Organizational Effectiveness Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Jacksonville Electric Authority - Jacksonville, FL</h4>
            <p>
              • Developed 3 interactive Power BI dashboards on human resource data to identify 3 high-turnover job families. 
              Designed Six Sigma-based improvement strategy to reduce turnover rate in these critical positions.
            </p>
            <p>
              • Consolidated 100+ training courses and workshops previously scattered across PDF documents and Excel files into 
              a centralized catalog in Power BI. Improved visibility of available professional development resources and automated 
              data democratization on training opportunities across the organization.
            </p>
            <p>
              • Built a Power Automate workflow to analyze employee training feedback weekly, identifying in-demand skills and 
              trending courses. Leveraged data-driven insights to streamline the training catalog, improving course recommendation 
              mechanisms and reducing the L&D team's review time by 25%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - Apr 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Advising Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Florida State College at Jacksonville - Jacksonville, FL</h4>
            <p>
              • Monitored Qless queue system to route students to preferred advisors faster, coordinating across multiple departments 
              and assisting with course selection, MyFSCJ account setup, and enrollment tasks.
            </p>
            <p>
              • Standardized training materials and workflows for new student workers, reducing onboarding time 30% and ensuring 
              consistent service delivery.
            </p>
            <p>
              • Implemented team engagement initiatives that enhanced collaboration and lifted advising center workflow efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2022 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Consultant Executive</h3>
            <h4 className="vertical-timeline-element-subtitle">AIESEC - Remote</h4>
            <p>
              • Led the "Global Talent" project, leveraging multi-channel outreach strategies—including marketing campaigns, 
              direct engagement, and partnerships—to generate qualified leads, expand the partner network, and attract skilled 
              foreign professionals to fill critical talent gaps.
            </p>
            <p>
              • Analyzed HR business requirements with partner companies to ensure alignment between candidate skills and organizational 
              needs, while standardizing onboarding workflows for international hires—streamlining integration and driving a 25% 
              increase in partner retention.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Customer Success Collaborator</h3>
            <h4 className="vertical-timeline-element-subtitle">FireApps Technology Joint Stock Company - Remote</h4>
            <p>
              • Supported 50+ e-commerce customers in adopting FireApps' language translation and drop-shipping applications by 
              guiding technical setup on their websites and troubleshooting integration issues.
            </p>
            <p>
              • Collaborated with technical teams to deliver training sessions and support documentation, assisting clients implement 
              apps smoothly and sustaining 90%+ client retention rate. Leveraged Excel, Mailchimp, and CRM tools to track client 
              activities, identify upsell opportunities, and boost upgrade rates.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
