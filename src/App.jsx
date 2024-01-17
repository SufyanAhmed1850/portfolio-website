import Hero from "@components/Hero";
import Navbar from "@components/Navbar";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import { useContext } from "react";
import { CursorContext } from "./context/CursorContext";
import { motion } from "framer-motion";

function App() {
    const { cursorVariants, cursorBg } = useContext(CursorContext);
    return (
        <>
            <main>
                <Navbar profileImageBoolean="true" />
                <Hero />
                <Skills />
                <Projects />
            </main>
            <footer>
                <div>
                    <Contact />
                    <div className="nav-bottom">
                        <Navbar bottom="2.5rem" />
                    </div>
                </div>
            </footer>
            <motion.div
                variants={cursorVariants}
                animate={cursorBg}
                transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
                className="custom-mouse"
            ></motion.div>
        </>
    );
}

export default App;
