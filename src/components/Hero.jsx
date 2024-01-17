import "@components/css/Hero.css";
import Button from "@components/Button";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Hero = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <section>
            <div className="hero">
                <div className="hero-title">
                    <h1
                        onMouseEnter={() => mouseEnterHandler("large")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        Nice to meet you! I’m{" "}
                        <span className="name">Sufyan</span>.
                    </h1>
                </div>
                <div className="hero-body">
                    <p
                        onMouseEnter={() => mouseEnterHandler("medium")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        Based in Pakistan, I’m a MERN stack developer passionate
                        about building accessible web apps that users love.
                    </p>
                    <div>
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
