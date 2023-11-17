import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
    return (
        <>
            <main>
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
            </main>
            <footer>
                <div>
                    <Contact />
                    <div className="nav-bottom">
                        <Navbar />
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
