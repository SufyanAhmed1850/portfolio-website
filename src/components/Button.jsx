import "@components/css/Button.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Button = ({ text }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <a
            href="#contact"
            className="u-button"
            onMouseEnter={() => mouseEnterHandler("small")}
            onMouseLeave={mouseLeaveHandler}
            style={{ cursor: "pointer" }}
        >
            <span>{text || "CONTACT ME"}</span>
        </a>
    );
};

export default Button;
