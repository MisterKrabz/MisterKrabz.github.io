import React from "react";
import "./workExperience.css";

const Card = (props) => {
    return (
        <div className="work-experience-card">
            <h3 className="work-experience-title">{props.position}</h3>
            <p className="work-experience-company">{props.company}</p>
            <p className="work-experience-duration">{props.duration}</p>
            <p className="work-experience-description">{props.description}</p>
        </div>
    );
}

const WorkExperience = () => { 
    return (
        <section className="work-experience-section">
            <div className="work-experience-title-container">
                <h2 className="work-experience-title">Work Experience</h2>
            </div>

            <div className="work-experience-content-area">
                <Card position = "Lifeguard" company = "Unique Pool Management" duration = "June 2022 - August 2023" description = "I maintained the safety of patrons by assisting in events of injury, surveying pool chemicals, enforcing company rules, checking in guests and watching over guests in the swimming pool.\n\nI passed the lifeguarding + CPR + AED + rescue examinations and obtained the American Red Cross® certificate for Lifeguarding/First Aid/CPR/AED."></Card>
                <Card position = "Server" company = "Red Lobster" duration = "June 2025 - Present" description = ""></Card>
            </div>
        </section>
    );
}

export default WorkExperience;