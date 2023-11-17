import "./project.css";

const Project = ({ img, title, techs }) => {
    return (
        <div className="project">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div className="tech">
                {techs.map((tech, ind) => {
                    return <p key={ind}>{tech}</p>;
                })}
            </div>
        </div>
    );
};

export default Project;
