import { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();
const CursorProvider = ({ children }) => {
    const [cursorPosition, setCursorPosition] = useState({
        x: null,
        y: null,
    });
    const [cursorBg, setCursorBg] = useState("default");
    const move = (e) => {
        setCursorPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", move);
        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    const cursorVariants = {
        default: {
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            backgroundColor: "#4ee1a0",
        },
        textLarge: {
            width: "150px",
            height: "150px",
            x: cursorPosition.x - 72,
            y: cursorPosition.y - 72,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        },
        textMedium: {
            width: "75px",
            height: "75px",
            x: cursorPosition.x - 36,
            y: cursorPosition.y - 36,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        },
        textSmall: {
            width: "50px",
            height: "50px",
            x: cursorPosition.x - 24,
            y: cursorPosition.y - 24,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        },
    };

    const mouseEnterHandler = (text) => {
        if (text === "large") {
            setCursorBg("textLarge");
        } else if (text === "medium") {
            setCursorBg("textMedium");
        } else if (text === "small") {
            setCursorBg("textSmall");
        }
    };

    const mouseLeaveHandler = () => {
        setCursorBg("default");
    };

    return (
        <CursorContext.Provider
            value={{
                cursorVariants,
                cursorBg,
                mouseEnterHandler,
                mouseLeaveHandler,
            }}
        >
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;
