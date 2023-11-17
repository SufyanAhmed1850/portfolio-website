import "./hero.css";
import Button from "../Button";

const Hero = () => {
    return (
        <section>
            <div className="hero">
                <div className="hero-title">
                    <h1>Nice to meet you!</h1>
                    <h1>
                        I’m <span className="name">Sufyan Ahmed</span>.
                    </h1>
                </div>
                <div className="hero-body">
                    <p>
                        Based in Pakistan, I’m a MERN stack developer passionate
                        about building accessible web apps that users love.
                    </p>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </section>
    );
};

export default Hero;
