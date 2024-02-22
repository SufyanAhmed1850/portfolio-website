import "@components/css/Navbar.css";
import IconGithub from "@assets/jsx/github";
import linkedInIcon from "@assets/LinkedIn.svg";
import twitterIcon from "@assets/twitter.svg";
import whatsappIcon from "@assets/whatsapp.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useContext, useCallback } from "react";
import { CursorContext } from "@context/CursorContext";
import Reveal from "@components/Reveal";

const Navbar = ({ profileImageBoolean, bottom }) => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [src, setSrc] = useState();
    const [profileImageLoaded, setProfileImageLoaded] = useState(false);
    const [animationState, setAnimationState] = useState("hidden");

    const handleImageLoad = useCallback(() => {
        setAnimationState("visible");
    }, []);

    const imageVariants = {
        hidden: {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            y: -100,
        },
        visible: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            y: 0,
        },
    };

    const updateImageSrc = useCallback(() => {
        if (window.innerWidth > 768) {
            return "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp/v1706643218/profile%20pic/pbdpyn2dtc78msdqmgan.jpg";
        } else if (window.innerWidth > 600 && window.innerWidth <= 768) {
            return "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp/v1706643218/profile%20pic/y1bt8fxh3sax4oscbfpr.jpg";
        } else {
            return "https://res.cloudinary.com/dke5jqhus/image/upload/f_webp/v1706643218/profile%20pic/jzsyxnxzs796zcaq0hzn.jpg";
        }
    }, []);

    useEffect(() => {
        setSrc(updateImageSrc());
        function handleResize() {
            setSrc(updateImageSrc());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [updateImageSrc]);
    return (
        <header
            className="nav-header"
            style={{ paddingBottom: bottom || 0 + "px" }}
        >
            <div>
                <Reveal>
                    <h3
                        className="logo"
                        onMouseEnter={() => mouseEnterHandler("medium")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "default" }}
                    >
                        sufyan
                        <span style={{ color: "var(--accent-)" }}>ahmed</span>
                    </h3>
                </Reveal>
            </div>
            <div className="icons">
                <Reveal>
                    <a
                        href="https://github.com/SufyanAhmed1850"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <IconGithub />
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://www.linkedin.com/in/sufyanahmed1850"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <img src={linkedInIcon} alt="linkedIn" />
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://wa.me/923327319831"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <img src={whatsappIcon} alt="twitter" />
                    </a>
                </Reveal>
                <Reveal>
                    <a
                        href="https://twitter.com/devsufyan"
                        target="_blank"
                        onMouseEnter={() => mouseEnterHandler("small")}
                        onMouseLeave={mouseLeaveHandler}
                        style={{ cursor: "pointer", display: "flex" }}
                    >
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </Reveal>
            </div>
            {profileImageBoolean && (
                <div
                    className={`nav-profile-image ${
                        profileImageLoaded ? "" : "profile-loading"
                    }`}
                >
                    <motion.img
                        initial="hidden"
                        animate={animationState}
                        variants={imageVariants}
                        transition={{
                            ease: [0.83, 0, 0.17, 1],
                            duration: 1.5,
                        }}
                        fetchpriority="high"
                        src={src}
                        alt="Profile Picture"
                        onLoad={() => {
                            handleImageLoad();
                            setProfileImageLoaded(true);
                        }}
                    />
                </div>
            )}
        </header>
    );
};

export default Navbar;
