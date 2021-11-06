import useEventListener from "./useEventListener";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";

const useTraverse = (eventType) => {
  const [input, setInput] = useState(0);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      pathChecker(input);
    }, 150);
  }, [input]);

  const pathChecker = (number) => {
    if (location.pathname === "/mv-resume" && number > 0) {
      history.push("mv-resume/about");
    }

    if (location.pathname === "/mv-resume/about" && number > 0) {
      history.push("mv-resume/skills");
    } else if (location.pathname === "/mv-resume/about" && number < 0) {
      history.push("/mv-resume");
    }

    if (location.pathname === "/mv-resume/skills" && number > 0) {
      history.push("/mv-resume/projects");
    } else if (location.pathname === "/mv-resume/skills" && number < 0) {
      history.push("/mv-resume/about");
    }

    if (location.pathname === "/mv-resume/projects" && number > 0) {
      history.push("/mv-resume/contact");
    } else if (location.pathname === "/mv-resume/projects" && number < 0) {
      history.push("/mv-resume/skills");
    }

    if (location.pathname === "/mv-resume/contact" && number > 0) {
      return;
    } else if (location.pathname === "/mv-resume/contact" && number < 0) {
      history.push("/mv-resume/projects");
    }
  };

  useEventListener(eventType, (e) => {
    let number = Math.sign(e.deltaY);
    setInput(number);
  });
};

export default useTraverse;
