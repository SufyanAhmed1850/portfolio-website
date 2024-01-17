import "@components/css/Nav.css";
import githubIcon from "@assets/github.svg";
import linkedInIcon from "@assets/LinkedIn.svg";
import twitterIcon from "@assets/twitter.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import profilePicDesk from "@assets/image-profile-desktop.webp";
import profilePicTab from "@assets/image-profile-tablet.webp";
import profilePicMob from "@assets/image-profile-mobile.webp";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const [src, setSrc] = useState();
    useEffect(() => {
        if (window.innerWidth > 768) {
            setSrc(profilePicDesk);
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            setSrc(profilePicTab);
        } else if (window.innerWidth <= 600) {
            setSrc(profilePicMob);
        }
    }, []);
    return (
        <header
            className="nav-header"
            style={{ paddingBottom: bottom || 0 + "px" }}
        >
            <div>
                <h3 className="logo">sufyanahmed</h3>
            </div>
            <div className="icons">
                <a href="https://github.com/SufyanAhmed1850" target="_blank">
                    <img src={githubIcon} alt="github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/SufyanAhmed1850"
                    target="_blank"
                >
                    <img src={linkedInIcon} alt="linkedIn" />
                </a>
                <a href="https://wa.me/923327319831" target="_blank">
                    <img src={whatsappIcon} alt="twitter" />
                </a>
                <a href="https://twitter.com/devsufyan" target="_blank">
                    <img src={twitterIcon} alt="twitter" />
                </a>
            </div>
            {profileImageBoolean && (
                <div className="nav-profile-image">
                    <motion.img
                        initial={{
                            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                            scale: 1.2,
                            y: -50,
                        }}
                        animate={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            scale: 1,
                            y: 0,
                        }}
                        transition={{
                            ease: [0.83, 0, 0.17, 1],
                            duration: 2,
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
