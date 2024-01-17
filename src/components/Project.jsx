import { useState } from "react";
import "@components/css/Project.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Project = ({ img, title, techs, code, project }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
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
                <img src={img} alt={title} loading="lazy" />
                {window.innerWidth > 768 && (
                    <div className="overlay">
                        <div className="overlay-btn">
                            <a
                                href={project}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="submit-btn">VIEW PROJECT</span>
                            </a>
                            <a
                                href={code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "pointer" }}
                            >
                                <span className="submit-btn">VIEW CODE</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h3
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "default" }}
                >
                    {title}
                </h3>
                <div className="tech">
                    {techs.map((tech, ind) => {
                        return (
                            <p
                                key={tech}
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "default" }}
                            >
                                {tech}
                            </p>
                        );
                    })}
                </div>
            </div>
            {window.innerWidth <= 768 && (
                <div className="tab-btn-container">
                    <a
                        href={project}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        <span className="submit-btn">VIEW PROJECT</span>
                    </a>
                    <a
                        href={code}
                        target="_blank"
                        rel="noopener noreferrer"
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
