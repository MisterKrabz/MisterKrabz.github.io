import React from "react";  
import "./contact.css";

const Contact = () => {

    return(
        <section class="contact-section">
            <div class="contact-text-content">
                <h1 class="main-heading">Excited<br/>to know<br/>more?</h1>
                <h2 class="sub-heading">Let's talk!</h2>
            </div>

            <div class="contact-form-container">
                <form action="#" method="POST"> {/* Replace # with your form endpoint */}
                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" value = {name1}/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" value = {email}/>
                    </div>
                    <div class="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="6" placeholder="Message" value = {message}></textarea>
                    </div>
                    <div class="form-button-group">
                        <button type="submit" disabled = {!name1 || !email || !message}class="send-button" onclick = {sendEmail}>Send</button>
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