import "./nav.css";
import githubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/LinkedIn.svg";
import twitterIcon from "../../assets/twitter.svg";
import whatsappIcon from "../../assets/whatsapp.svg";

const Navbar = () => {
    return (
        <header>
            <div>
                <h3 className="logo">sufyanahmed</h3>
            </div>
            <div className="icons">
                <img src={githubIcon} alt="github" />
                <img src={linkedInIcon} alt="linkedIn" />
                <img src={whatsappIcon} alt="twitter" />
                <img src={twitterIcon} alt="twitter" />
            </div>
        </header>
    );
};

export default Navbar;
