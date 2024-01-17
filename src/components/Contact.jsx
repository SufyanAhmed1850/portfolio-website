import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "@components/css/Contact.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Contact = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [qouteName, setQouteName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY,
            )
            .then(
                (result) => {
                    alert("Sent Successfully.");
                    setQouteName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    alert("There was an error while sending your qoute.");
                },
            );
    };

    return (
        <div className="contact" id="contact">
            <div className="contact-body">
                <h1
                    onMouseEnter={() => mouseEnterHandler("large")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "default" }}
                >
                    Contact
                </h1>
                <p
                    onMouseEnter={() => mouseEnterHandler("medium")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "default" }}
                >
                    I would love to hear about your project and how I could
                    help. Please fill in the form, and I’ll get back to you as
                    soon as possible.
                </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="qoute">
                <input
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    onChange={(e) => setQouteName(e.target.value)}
                    value={qouteName}
                    name="user_name"
                    type="text"
                    placeholder="NAME"
                />
                <input
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    name="user_email"
                    placeholder="EMAIL"
                />
                <textarea
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    name="message"
                    placeholder="MESSAGE"
                />
                <div className="btn">
                    <input
                        className="submit-btn"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        type="submit"
                        value={"SEND MESSAGE"}
                    />
                </div>
            </form>
        </div>
    );
};

export default Contact;
