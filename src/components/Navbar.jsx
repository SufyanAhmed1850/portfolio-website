import "@components/css/Navbar.css";
import IconGithub from "@assets/jsx/github";
import linkedInIcon from "@assets/LinkedIn.svg";
import twitterIcon from "@assets/twitter.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [src, setSrc] = useState();
    useEffect(() => {
        if (window.innerWidth > 768) {
            setSrc(
                "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-desktop_zn5wf8.webp",
            );
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            setSrc(
                "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-tablet_ltkoqr.webp",
            );
        } else if (window.innerWidth <= 600) {
            setSrc(
                "https://res.cloudinary.com/doigzeztt/image/upload/v1705742111/image-profile-mobile_fzrenn.webp",
            );
        }
    }, []);
    return (
        <header
            className="nav-header"
            style={{ paddingBottom: bottom || 0 + "px" }}
        >
            <div>
                <h3
                    className="logo"
                    onMouseEnter={() => mouseEnterHandler("medium")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "default" }}
                >
                    sufyanahmed
                </h3>
            </div>
            <div className="icons">
                <a
                    href="https://github.com/SufyanAhmed1850"
                    target="_blank"
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "pointer" }}
                >
                    <IconGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/SufyanAhmed1850"
                    target="_blank"
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "pointer" }}
                >
                    <img src={linkedInIcon} alt="linkedIn" />
                </a>
                <a
                    href="https://wa.me/923327319831"
                    target="_blank"
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "pointer" }}
                >
                    <img src={whatsappIcon} alt="twitter" />
                </a>
                <a
                    href="https://twitter.com/devsufyan"
                    target="_blank"
                    onMouseEnter={() => mouseEnterHandler("small")}
                    onMouseLeave={mouseLeaveHandler}
                    style={{ cursor: "pointer" }}
                >
                    <img src={twitterIcon} alt="twitter" />
                </a>
            </div>
            {profileImageBoolean && (
                <div className="nav-profile-image">
                    <motion.img
                        initial={{
                            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                            y: -100,
                        }}
                        animate={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            y: 0,
                        }}
                        transition={{
                            ease: [0.83, 0, 0.17, 1],
                            duration: 1.5,
                        }}
                        fetchpriority="high"
                        src={src}
                        alt="Profile Picture"
                    />
                </div>
            )}
        </header>
    );
};

export default Navbar;
