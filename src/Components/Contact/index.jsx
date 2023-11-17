import Button from "../Button";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-body">
                <h1>Contact</h1>
                <p>
                    I would love to hear about your project and how I could
                    help. Please fill in the form, and I’ll get back to you as
                    soon as possible.
                </p>
            </div>
            <div className="qoute">
                <input type="text" placeholder="NAME" />
                <input type="email" placeholder="EMAIL" />
                <textarea placeholder="MESSAGE" />
                <div className="btn">
                    <span>SEND MESSAGE</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
