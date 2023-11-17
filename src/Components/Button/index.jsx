import "./Button.css";

const Button = ({ text }) => {
    return (
        <div className="u-button">
            <span>{text || "CONTACT ME"}</span>
        </div>
    );
};

export default Button;
