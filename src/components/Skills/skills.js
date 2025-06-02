import React from "react";
import "./skills.css"

const Skills = () => {
    return (
<section class="skills-section">
    <div class="skills-title-container">
        <h2 class="skills-title">
            <span class="title-icon">&lt;/&gt;</span> Skills
        </h2>
    </div>

    <div class="skills-content-area">
        <div class="skills-grid">
            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=HTML5" alt="HTML5 Logo"/>
                </div>
                <p class="skill-name">HTML</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=CSS3" alt="CSS3 Logo"/>
                </div>
                <p class="skill-name">CSS</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                     <div class="js-icon-custom">JS</div>
                </div>
                <p class="skill-name">Javascript</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=React" alt="React Logo"/>
                </div>
                <p class="skill-name">React</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                     <div class="next-icon-custom">N</div>
                </div>
                <p class="skill-name">Next</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=Supa" alt="Supabase Logo"/>
                </div>
                <p class="skill-name">Supabase</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=Fire" alt="Firebase Logo"/>
                </div>
                <p class="skill-name">Firebase</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=Tail" alt="Tailwind Logo"/>
                </div>
                <p class="skill-name">Tailwind</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <div class="ts-icon-custom">TS</div>
                </div>
                <p class="skill-name">Typescript</p>
            </div>

            <div class="skill-card">
                <div class="skill-icon-container">
                    <img src="https://via.placeholder.com/60/000000/FFFFFF?text=Fig" alt="Figma Logo"/>
                </div>
                <p class="skill-name">Figma</p>
            </div>
            </div>
    </div>
</section>
    );
}

export default Skills