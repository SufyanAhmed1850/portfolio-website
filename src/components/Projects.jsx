import Button from "@components/Button";
import Project from "@components/Project";
import "@components/css/Projects.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Projects = () => {
    const projects = [
        {
            title: "DEV LINKS",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/tkwv9pzjupppgmd2lgxn.jpg",
            project: "https://devvlinks.vercel.app",
            code: "https://github.com/SufyanAhmed1850/dev-links",
            techs: ["REACT", "NODE", "EXPRESS"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "TODO",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/fadjzk7qdcxspejazwz9.jpg",
            project: "https://sufyanahmed1850.github.io/Todo-App-Firebase",
            code: "https://github.com/SufyanAhmed1850/Todo-App-Firebase",
            techs: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "DEV FINDER",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/clxpsizcgkhjpximpelq.jpg",
            project: "https://sufyanahmed1850.github.io/Github-DevFinder",
            code: "https://github.com/SufyanAhmed1850/Github-DevFinder",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "THE PLANETS",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520988/portfolio-projects-images/vyidsqztvtnuu6hej9ji.jpg",
            project: "https://sufyanahmed1850.github.io/Planets",
            code: "https://github.com/SufyanAhmed1850/Planets",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "SPEEDY TV",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520987/portfolio-projects-images/a3oudmjtpprikml0zxxi.jpg",
            project: "https://sufyanahmed1850.github.io/Moives",
            code: "https://github.com/SufyanAhmed1850/Moives",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "TECHONIQ LANDING PAGE",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520991/portfolio-projects-images/ffpididd3wqdxialui8s.jpg",
            project: "https://sufyanahmed1850.github.io/Techoniq",
            code: "https://github.com/SufyanAhmed1850/Techoniq",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "PORTFOLIO WEBSITE",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/w_540,h_396/f_webp/v1703520990/portfolio-projects-images/twxd6zkpmpnwgmzcuscx.jpg",
            project: "https://sufyanahmed1850.github.io/Portfolio",
            code: "https://github.com/SufyanAhmed1850/Portfolio",
            techs: ["HTML", "CSS"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
    ];
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <div className="projects-container">
            <div className="header">
                <h1
                    onMouseEnter={() => mouseEnterHandler("large")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "default" }}
                >
                    Projects.
                </h1>
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
                        shortDescription={project.shortDescription}
                        longDescription={project.longDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
