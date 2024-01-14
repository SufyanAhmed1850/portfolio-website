import Button from "@components/Button";
import Project from "@components/Project";
import "@components/css/Projects.css";

const Projects = () => {
    const projects = [
        {
            title: "DEV LINKS",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/tkwv9pzjupppgmd2lgxn.jpg",
            project: "https://devvlinks.vercel.app",
            code: "https://github.com/SufyanAhmed1850/dev-links",
            techs: ["REACT", "NODE", "EXPRESS", ""],
        },
        {
            title: "TODO",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/fadjzk7qdcxspejazwz9.jpg",
            project: "https://sufyanahmed1850.github.io/Todo-App-Firebase",
            code: "https://github.com/SufyanAhmed1850/Todo-App-Firebase",
            techs: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
        },
        {
            title: "DEV FINDER",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/clxpsizcgkhjpximpelq.jpg",
            project: "https://sufyanahmed1850.github.io/Github-DevFinder",
            code: "https://github.com/SufyanAhmed1850/Github-DevFinder",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "THE PLANETS",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520988/portfolio-projects-images/vyidsqztvtnuu6hej9ji.jpg",
            project: "https://sufyanahmed1850.github.io/Planets",
            code: "https://github.com/SufyanAhmed1850/Planets",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "SPEEDY TV",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/a3oudmjtpprikml0zxxi.jpg",
            project: "https://sufyanahmed1850.github.io/Moives",
            code: "https://github.com/SufyanAhmed1850/Moives",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "TECHONIQ LANDING PAGE",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520991/portfolio-projects-images/ffpididd3wqdxialui8s.jpg",
            project: "https://sufyanahmed1850.github.io/Techoniq",
            code: "https://github.com/SufyanAhmed1850/Techoniq",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
        },
        {
            title: "PORTFOLIO WEBSITE",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520990/portfolio-projects-images/twxd6zkpmpnwgmzcuscx.jpg",
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
