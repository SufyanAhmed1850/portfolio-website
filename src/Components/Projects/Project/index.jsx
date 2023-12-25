import { useState } from "react";
import "./project.css";

const Project = ({ img, title, techs, code, project }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                window.innerWidth >= 768 && setShowOverlay(true);
            }}
            onMouseLeave={() => {
                window.innerWidth >= 768 && setShowOverlay(false);
            }}
            className={`project ${showOverlay ? "overlay-active" : ""}`}
        >
            <div className="img-container">
                <img src={img} alt={title} />
                {window.innerWidth > 768 && (
                    <div className="overlay">
                        <div className="overlay-btn">
                            <a
                                href={project}
                                target="_blank"
                                rel="external"
                                className="btn"
                            >
                                <span className="submit-btn">VIEW PROJECT</span>
                            </a>
                            <a
                                href={code}
                                target="_blank"
                                rel="external"
                                className="btn"
                            >
                                <span className="submit-btn">VIEW CODE</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h3>{title}</h3>
                <div className="tech">
                    {techs.map((tech, ind) => {
                        return <p key={ind}>{tech}</p>;
                    })}
                </div>
            </div>
            {window.innerWidth <= 768 && (
                <div className="tab-btn-container">
                    <a
                        href={project}
                        target="_blank"
                        rel="external"
                        className="btn"
                    >
                        <span className="submit-btn">VIEW PROJECT</span>
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        rel="external"
                        className="btn"
                    >
                        <span className="submit-btn">VIEW CODE</span>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Project;
