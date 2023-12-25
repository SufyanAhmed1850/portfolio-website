import Button from "../Button";
import Project from "./Project";
import "./projects.css";
import DevLinks from "../../assets/portfolio-dev-links.jpg";
import DevFinder from "../../assets/portfolio-dev-finder.jpg";
import Planets from "../../assets/portfolio-planets.jpg";
import SpeedyTv from "../../assets/portfolio-speedy-tv.jpg";
import Techoniq from "../../assets/portfolio-techoniq.jpg";
import OldPortfolio from "../../assets/portfolio-old-portfolio.jpg";
import Todo from "../../assets/portfolio-todo.jpg";

const Projects = () => {
    const projects = [
        {
            title: "DEV LINKS",
            img: DevLinks,
            project: "https://devvlinks.vercel.app",
            code: "https://github.com/SufyanAhmed1850/dev-links",
            techs: ["REACT", "NODE", "EXPRESS", ""],
        },
        {
            title: "TODO",
            img: Todo,
            project: "https://sufyanahmed1850.github.io/Todo-App-Firebase",
            code: "https://github.com/SufyanAhmed1850/Todo-App-Firebase",
            techs: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
        },
        {
            title: "DEV FINDER",
            img: DevFinder,
            project: "https://sufyanahmed1850.github.io/Github-DevFinder",
            code: "https://github.com/SufyanAhmed1850/Github-DevFinder",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "THE PLANETS",
            img: Planets,
            project: "https://sufyanahmed1850.github.io/Planets",
            code: "https://github.com/SufyanAhmed1850/Planets",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "SPEEDY TV",
            img: SpeedyTv,
            project: "https://sufyanahmed1850.github.io/Moives",
            code: "https://github.com/SufyanAhmed1850/Moives",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "TECHONIQ LANDING PAGE",
            img: Techoniq,
            project: "https://sufyanahmed1850.github.io/Techoniq",
            code: "https://github.com/SufyanAhmed1850/Techoniq",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "PORTFOLIO WEBSITE",
            img: OldPortfolio,
            project: "https://sufyanahmed1850.github.io/Portfolio",
            code: "https://github.com/SufyanAhmed1850/Portfolio",
            techs: ["HTML", "CSS"],
        },
    ];
    return (
        <div className="projects-container">
            <div className="header">
                <h1>Projects</h1>
                <Button text="MORE WORK" />
            </div>
            <div className="body">
                {projects.map((project, ind) => (
                    <Project
                        key={ind}
                        img={project.img}
                        title={project.title}
                        techs={project.techs}
                        project={project.project}
                        code={project.code}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
