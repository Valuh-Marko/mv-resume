import "./App.scss";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { AnimatePresence } from "framer-motion";
// import { Cursor } from "./components/Cursor/Cursor";

function App() {
  /*
   * Functionality of the custom cursor, being tested for future implementation.
   * Heavily Impacts Performance
   **/
  // const customCursorHandler = (e) => {
  //   document
  //     .querySelector(".cursor")
  //     .setAttribute(
  //       `style`,
  //       `top: ${e.pageY - 8.5}px; left: ${e.pageX - 8.5}px;`,
  //     );
  // };

  return (
    <div className="overlay">
      {/* <Cursor />  this cursor is a work in progress */}
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
