import "@components/css/Skill.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Skill = ({ title, exp }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <div
            className="skill"
            onMouseEnter={() => mouseEnterHandler("large")}
            onMouseLeave={mouseLeaveHandler}
            style={{ cursor: "default" }}
        >
            <h2>{title}</h2>
            <p>{exp}</p>
        </div>
    );
};

export default Skill;
