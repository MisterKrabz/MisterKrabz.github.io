import React from "react";
import "./about.css";
import profilePic from '../../assets/profilePic.jpg';

const About = () => {
    return(
        <section class="about-section">
            <div class="about-title-container">
                <h2 class="about-title">
                    &#128100; About </h2>
            </div>


            <div class="about-content-area">
                <div class="about-image-container">
                    <img src={profilePic} alt="Profile Picture" class="profile-image"/>
                </div>
                <div class="about-text-box">
                    <p>
                    I am a college student at the university of Wisconsin-Madison, studing 
                    Computer Science and Data Science. I have had an appreciation for the 
                    applications of technology every since I moved from rural Oklahoma to 
                    St. Louis Missouri in middle school. 
                    <br/><br/>
                    I enjoy swimming in my free time and have been a competitive swimmer 
                    throughout high school. During the 2023 Missouri State Swim Meet, I ranked: 
                    <ul>
                        <li>7st in the 200 Freestyle relay</li>
                        <li>21nd in the 100 Breaststroke</li>
                        <li>33rd in the 100 Freestyle</li>
                    </ul>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;