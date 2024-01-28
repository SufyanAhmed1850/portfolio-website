import Project from "@components/Project";
import "@components/css/Projects.css";
import { useContext } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";

const Projects = () => {
    const projects = [
        {
            title: "INVOICE WEB APP",
            img: "https://res.cloudinary.com/doigzeztt/image/upload/f_webp,c_fill,w_700,h_445/v1705946704/Portfolio%20Projects/invoice_eevvd4.jpg",
            project: "https://devv-invoice.vercel.app",
            code: "https://github.com/shahroz769/invoice-app",
            techs: "REACT NODE EXPRESS FRAMER-MOTION",
            shortDescription:
                "Effortlessly manage invoices. Create, edit, search, and filter invoices by status. Save drafts and mark pending invoices as paid.",
            longDescription:
                "Invoice app is a full-stack app made for seamless invoice management. With React on frontend and backend using Node.js, Express.js, and MongoDB, users can efficiently create, edit, and delete invoices. Framer Motion animations enhance the user experience with smooth animations. Users can save invoices as drafts, mark pending invoices as paid, and filter invoices based on status (draft/pending/paid) or search invoice by invoice number. Form validations ensure accuracy during invoice creation and editing. ",
        },
        {
            title: "DEV LINKS",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520987/portfolio-projects-images/tkwv9pzjupppgmd2lgxn.jpg",
            project: "https://devvlinks.vercel.app",
            code: "https://github.com/SufyanAhmed1850/dev-links",
            techs: "REACT NODE EXPRESS",
            shortDescription:
                "Create, organize, and share multiple links with anyone hassle-free. Drag-and-drop support to reorder links, mobile previews, and profile customization for a personalized experience.",
            longDescription:
                "Link-sharing app is a platform enabling users to create, organize, and share multiple links with anyone. The app is built using React for frontend, and Node.js, Express.js, and MongoDB on the backend. Users can see mobile mockup previews while creating links. It features drag-and-drop functionality for link reordering, validation checks for link submissions, and the ability to customize profiles with details like pictures, names, and emails. Frame motion is used to smoothly animate between pages.",
        },
        {
            title: "TODO",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520987/portfolio-projects-images/fadjzk7qdcxspejazwz9.jpg",
            project: "https://sufyanahmed1850.github.io/Todo-App-Firebase",
            code: "https://github.com/SufyanAhmed1850/Todo-App-Firebase",
            techs: "HTML CSS JAVASCRIPT FIREBASE",
            shortDescription:
                "A simple Todo App with Firebase integration for real-time data storage and synchronization.",
            longDescription:
                "A simple Todo App built with HTML, CSS, and JavaScript, leveraging Firebase for real-time data storage and synchronization. Users can add, edit, and delete tasks, with changes reflected instantly across all devices. Firebase's Firestore database ensures seamless data management and synchronization, providing a hassle-free Todo management experience.",
        },
        {
            title: "DEV FINDER",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520987/portfolio-projects-images/clxpsizcgkhjpximpelq.jpg",
            project: "https://sufyanahmed1850.github.io/Github-DevFinder",
            code: "https://github.com/SufyanAhmed1850/Github-DevFinder",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "Find GitHub developers easily with the Dev Finder Web App. Search by username, explore profiles, and personalize your experience.",
            longDescription:
                "Dev Finder is a simple web app built with HTML, CSS, and JavaScript, enabling users to find GitHub developers effortlessly. Users can search for developers by their GitHub username and explore detailed profiles with information like bio, repositories, followers, and following. The app provides a personalized experience with light and dark themes for comfortable usage.",
        },
        {
            title: "THE PLANETS",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520988/portfolio-projects-images/vyidsqztvtnuu6hej9ji.jpg",
            project: "https://sufyanahmed1850.github.io/Planets",
            code: "https://github.com/SufyanAhmed1850/Planets",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "Explore the planets of our solar system with The Planets website. Learn interesting facts and engage with interactive content.",
            longDescription:
                "The Planets is an interactive website that allows users to explore the planets of our solar system. Built with HTML, CSS, and JavaScript, the site offers engaging content with detailed information about each planet. Users can navigate through the planets, learn interesting facts, and interact with visual representations for an immersive learning experience.",
        },
        {
            title: "SPEEDY TV",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520987/portfolio-projects-images/a3oudmjtpprikml0zxxi.jpg",
            project: "https://sufyanahmed1850.github.io/Moives",
            code: "https://github.com/SufyanAhmed1850/Moives",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "Watch your favorite movies and TV shows with Speedy TV. Discover new content, browse categories, and enjoy seamless streaming.",
            longDescription:
                "Speedy TV is a web application where users can watch their favorite movies and TV shows. Built with HTML, CSS, and JavaScript, the app offers a seamless streaming experience. Users can discover new content, browse through different categories, and enjoy uninterrupted entertainment. The user interface is designed to be intuitive and easy to navigate, providing a pleasant viewing experience for users of all ages.",
        },
        {
            title: "TECHONIQ LANDING PAGE",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520991/portfolio-projects-images/ffpididd3wqdxialui8s.jpg",
            project: "https://sufyanahmed1850.github.io/Techoniq",
            code: "https://github.com/SufyanAhmed1850/Techoniq",
            techs: "HTML CSS JAVASCRIPT",
            shortDescription:
                "Experience innovation with Techoniq Landing Page. Explore cutting-edge products, learn about the latest technologies, and engage with interactive content.",
            longDescription:
                "Techoniq Landing Page is designed to showcase cutting-edge products and the latest technologies. Built using HTML, CSS, and JavaScript, the landing page offers an immersive experience for visitors. Users can explore interactive content, learn about innovative products, and stay updated with the latest tech trends. The user interface is intuitive and visually appealing, providing a seamless browsing experience for users.",
        },
        {
            title: "PORTFOLIO WEBSITE",
            img: "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp,c_fill,w_700,h_445/v1703520990/portfolio-projects-images/twxd6zkpmpnwgmzcuscx.jpg",
            project: "https://sufyanahmed1850.github.io/Portfolio",
            code: "https://github.com/SufyanAhmed1850/Portfolio",
            techs: "HTML CSS",
            shortDescription:
                "Explore my personal portfolio website where I showcase my projects, skills, and experiences.",
            longDescription:
                "Welcome to my personal portfolio website! This platform is where I showcase my projects, skills, and experiences. It's built using HTML and CSS, providing a sleek and professional user interface for visitors to explore. Feel free to browse through my projects, learn more about my skills, and get in touch to discuss collaborations or opportunities.",
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
                        Projects
                        <span style={{ color: "var(--accent-)" }}>.</span>
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
