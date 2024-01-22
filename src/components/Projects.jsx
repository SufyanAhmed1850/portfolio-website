import Project from "@components/Project";
import "@components/css/Projects.css";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
import Reveal from "@components/Reveal";

const Projects = () => {
    const projects = [
        {
            title: "LINKS SHARING",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/links_dqmjdk.jpg",
            project: "https://devvlinks.vercel.app",
            code: "https://github.com/SufyanAhmed1850/dev-links",
            techs: ["REACT", "NODE", "EXPRESS"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "INVOICE",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/invoice_eevvd4.jpg",
            project: "https://devvlinks.vercel.app",
            code: "https://github.com/SufyanAhmed1850/dev-links",
            techs: ["REACT", "NODE", "EXPRESS"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "TIC TAC TOE",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/tic_tac_toe_vgtt6o.jpg",
            project: "https://sufyanahmed1850.github.io/Todo-App-Firebase",
            code: "https://github.com/SufyanAhmed1850/Todo-App-Firebase",
            techs: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "DICTIONARY",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/dictionary_o9t5aa.jpg",
            project: "https://sufyanahmed1850.github.io/Github-DevFinder",
            code: "https://github.com/SufyanAhmed1850/Github-DevFinder",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "DEV FINDER",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946705/Portfolio%20Projects/dev_finder_vbmeid.jpg",
            project: "https://sufyanahmed1850.github.io/Planets",
            code: "https://github.com/SufyanAhmed1850/Planets",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "PLANETS",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946706/Portfolio%20Projects/planets_f29f2r.jpg",
            project: "https://sufyanahmed1850.github.io/Techoniq",
            code: "https://github.com/SufyanAhmed1850/Techoniq",
            techs: ["HTML", "CSS", "JAVASCRIPT"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "BMI CALCULATOR",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/bmi_uw2ush.jpg",
            project: "https://sufyanahmed1850.github.io/Portfolio",
            code: "https://github.com/SufyanAhmed1850/Portfolio",
            techs: ["HTML", "CSS"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "PASSWORD GENERATOR",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/password_generator_zsm7dz.jpg",
            project: "https://sufyanahmed1850.github.io/Portfolio",
            code: "https://github.com/SufyanAhmed1850/Portfolio",
            techs: ["HTML", "CSS"],
            shortDescription:
                "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
            longDescription:
                "Pain.app is a real-time coaching app for students learning to paint. This app is my baby, designed and built on my own. The tech stack is based on top of Flutter for the mobile app, connected to a Python & FastAPI backend, with data stored in Postgres, deployed on Heroku. Because this isn't real, here's some gibberish to fill space :) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt. Fuga id sapiente facere ipsa eius exercitationem officiis deleniti, rerum dolorum. Deserunt soluta modi culpa animi.",
        },
        {
            title: "AGE CALCULATOR",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/age_rkhg21.jpg",
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
                <Reveal>
                    <h1
                        onMouseEnter={() => mouseEnterHandler("large")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        Projects.
                    </h1>
                </Reveal>
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
