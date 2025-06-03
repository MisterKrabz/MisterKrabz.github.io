import React from "react";  
import {useState} from "react";
import "./contact.css";

const Contact = () => {
    const [name1, setName1] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    return(
        <section className="contact-section">
            <div className="contact-text-content">
                <h1 className="main-heading">Excited<br/>to know<br/>more?</h1>
                <h2 className="sub-heading">Let's talk!</h2>
            </div>

            <div className="contact-form-container">
                <form action="#" method="POST"> {/* Replace # with your form endpoint */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" value = {name1} onChange = {(event) => setName1(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" value = {email} onChange = {(event) => setEmail(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" placeholder="Message" value = {message} onChange = {(event) => setMessage(event.target.value)}></textarea>
                    </div>
                    <div className="form-button-group">
                        <button type="submit" disabled = {!name1 || !email || !message} className="send-button" onClick = {sendEmail}>Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function sendEmail(event) {
    event.preventDefault(); // Prevents the browser from refreshing the page on form submission since when this happens, the form data is sent to the server and the web page is reloaded but there is no server specified in this case. 
    // TODO: impliment email sending here, send to pwangsuper@gmail.com
    alert("Your message has been sent!");
}

export default Contact;