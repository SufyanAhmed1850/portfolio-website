import { useState } from "react";
import "./project.css";

const Project = ({ img, title, techs }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
            className={`project ${showOverlay ? "overlay-active" : ""}`}
        >
            <div className="img-container">
                <img src={img} alt={title} />
                <div className="overlay">
                    <div className="overlay-btn">
                        <div className="btn">
                            <span>VIEW PROJECT</span>
                        </div>
                        <div className="btn">
                            <span>VIEW CODE</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>{title}</h3>
                <div className="tech">
                    {techs.map((tech, ind) => {
                        return <p key={ind}>{tech}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Project;
