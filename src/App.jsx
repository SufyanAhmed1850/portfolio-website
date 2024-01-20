import { useContext } from "react";
import { CursorContext } from "./context/CursorContext";
import { motion } from "framer-motion";
import Home from "@pages/Home";

function App() {
    const { cursorVariants, cursorBg, isVisible } = useContext(CursorContext);
    return (
        <>
            <Home />
            <motion.div
                style={{
                    visibility: isVisible ? "visible" : "hidden",
                }}
                variants={cursorVariants}
                animate={cursorBg}
                transition={{
                    type: "tween",
                    ease: "backOut",
                    duration: 0.3,
                }}
                className="custom-mouse"
            ></motion.div>
        </>
    );
}

export default App;
