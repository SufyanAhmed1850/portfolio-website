import "@components/css/Project.css";
import IconGithub from "@assets/jsx/github";
import IconUrl from "@assets/jsx/url";
import { Fragment, useContext, useEffect, useState } from "react";
import { CursorContext } from "../context/CursorContext";

const Project = ({
    img,
    title,
    techs,
    code,
    project,
    shortDescription,
    longDescription,
}) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [showProjectModal, setShowProjectModal] = useState(false);
    useEffect(() => {
        document.body.style.overflow = showProjectModal ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showProjectModal]);
    return (
        <>
            {showProjectModal && (
                <>
                    <div
                        className="project-modal-container"
                        onClick={(e) => {
                            if (
                                e.target.classList.contains(
                                    "project-modal-container",
                                )
                            ) {
                                setShowProjectModal(false);
                            }
                        }}
                    >
                        <div className="project-modal">
                            <div className="project-modal-image">
                                <img src={img} alt="Project Image" />
                            </div>
                            <div className="project-modal-body">
                                <h3
                                    onMouseEnter={() =>
                                        mouseEnterHandler("small")
                                    }
                                    onMouseLeave={mouseLeaveHandler}
                                    style={{ cursor: "default" }}
                                >
                                    {title}
                                </h3>
                                <div className="project-techs modal-project-techs">
                                    {techs.map((tech, ind) => (
                                        <Fragment key={ind}>
                                            <p
                                                onMouseEnter={() =>
                                                    mouseEnterHandler("small")
                                                }
                                                onMouseLeave={mouseLeaveHandler}
                                                style={{ cursor: "default" }}
                                            >
                                                {tech}
                                            </p>
                                            <p>
                                                {ind + 1 != techs.length &&
                                                    " - "}
                                            </p>
                                        </Fragment>
                                    ))}
                                </div>
                                <div className="project-modal-description">
                                    {
                                        <p
                                            onMouseEnter={() =>
                                                mouseEnterHandler("small")
                                            }
                                            onMouseLeave={mouseLeaveHandler}
                                            style={{ cursor: "default" }}
                                        >
                                            {longDescription}
                                        </p>
                                    }
                                </div>
                                <div className="modal-project-urls">
                                    <h3
                                        className="modal-links-text"
                                        onMouseEnter={() =>
                                            mouseEnterHandler("small")
                                        }
                                        onMouseLeave={mouseLeaveHandler}
                                        style={{ cursor: "default" }}
                                    >
                                        Project Links<span>.</span>
                                    </h3>
                                </div>
                                <div className="project-modal-links">
                                    <a
                                        href={code}
                                        target="_blank"
                                        onMouseEnter={() =>
                                            mouseEnterHandler("small")
                                        }
                                        onMouseLeave={mouseLeaveHandler}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <IconGithub fill="var(--accent-)" />
                                        <p>Source code</p>
                                    </a>
                                    <a
                                        href={project}
                                        target="_blank"
                                        onMouseEnter={() =>
                                            mouseEnterHandler("small")
                                        }
                                        onMouseLeave={mouseLeaveHandler}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <IconUrl fill="var(--accent-)" />
                                        <p>Live project</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className="project">
                <div
                    onClick={() => setShowProjectModal(true)}
                    className="project-bg"
                >
                    <img src={img} alt="Project Image" />
                </div>

                <div className="project-details">
                    <div className="project-title">
                        <h3
                            onMouseEnter={() => mouseEnterHandler("small")}
                            onMouseLeave={mouseLeaveHandler}
                            style={{ cursor: "default" }}
                        >
                            {title}
                        </h3>
                        <div className="project-title-hl"></div>
                        <div className="project-title-urls">
                            <a
                                target="_blank"
                                href={code}
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "pointer" }}
                            >
                                <IconGithub />
                            </a>
                            <a
                                target="_blank"
                                href={project}
                                onMouseEnter={() => mouseEnterHandler("small")}
                                onMouseLeave={mouseLeaveHandler}
                                style={{ cursor: "pointer" }}
                            >
                                <IconUrl />
                            </a>
                        </div>
                    </div>
                    <div className="project-techs">
                        {techs.map((tech, ind) => (
                            <Fragment key={ind}>
                                <p
                                    onMouseEnter={() =>
                                        mouseEnterHandler("small")
                                    }
                                    onMouseLeave={mouseLeaveHandler}
                                    style={{ cursor: "default" }}
                                >
                                    {tech}
                                </p>
                                <p>{ind + 1 != techs.length && " - "}</p>
                            </Fragment>
                        ))}
                    </div>
                    <div className="project-description">
                        <p
                            onMouseEnter={() => mouseEnterHandler("small")}
                            onMouseLeave={mouseLeaveHandler}
                            style={{ cursor: "default" }}
                        >
                            {shortDescription}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
