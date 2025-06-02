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
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email Address" required/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="6" placeholder="Message" required></textarea>
                    </div>
                    <div class="form-button-group">
                        <button type="submit" class="send-button">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;