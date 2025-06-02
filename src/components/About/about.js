import React from "react";
import "./about.css";
import profilePic from '../../assets/profilePic.jpg';

const About = () => {
    const [cardSidem, setCardSide] = React.useState("front");

    return(
        <section className="about-section" onclick = {setCardSide()}>
            <div className="about-title-container">
                <h2 className="about-title">
                    &#128100; About </h2>
            </div>


            <div className="about-content-area">
                <div className="about-image-container">
                    <img src={profilePic} alt="Profile Picture" class="profile-image"/>
                </div>
                <div className="about-text-box">
                    <p>
                    I am a college student at the university of Wisconsin-Madison, studing 
                    Computer Science and Data Science. I have had an appreciation for the 
                    applications of technology every since I moved from rural Oklahoma to 
                    St. Louis Missouri in middle school. 
                    <br/><br/>
                    I enjoy swimming in my free time and have been a competitive swimmer 
                    throughout high school. During the 2023 Missouri State Swim Meet, I ranked: 
                    </p>
                    <ul>
                        <li>7st in the 200 Freestyle relay</li>
                        <li>21nd in the 100 Breaststroke</li>
                        <li>33rd in the 100 Freestyle</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;