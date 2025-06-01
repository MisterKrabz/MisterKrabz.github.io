import React from "react";
import "./intro.css";

const Card = (props) =>{
    return(
        <div className="cardOutline">
            <h1 className="cardTitle">HELLO</h1>
            <h3 className="cardSubtitle">My Name Is</h3>
            <div className = "cardNamePlate">
                {props.name}
            </div>
        </div>
    );
}

const Intro = () => {
    return(
        <section id = "intro">
            <Card name = "Patrick Wang"/>
        </section>
    )
}

export default Intro