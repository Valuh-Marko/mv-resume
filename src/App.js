import "./App.scss";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="overlay">
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="" exact>
            <Home />
          </Route>
          <Route path="about">
            <About />
          </Route>
          <Route path="skills">
            <Skills />
          </Route>
          <Route path="projects">
            <Projects />
          </Route>
          <Route path="contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
