import useEventListener from "./useEventListener";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";

const useTraverse = (eventType) => {
  const [input, setInput] = useState(0);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    pathChecker(input);
  }, [input]);

  const pathChecker = (number) => {
    if (location.pathname === "/" && number > 0) {
      history.push("about");
    }

    if (location.pathname === "/about" && number > 0) {
      history.push("skills");
    } else if (location.pathname === "/about" && number < 0) {
      history.push("/");
    }

    if (location.pathname === "/skills" && number > 0) {
      return null;
    } else if (location.pathname === "/skills" && number < 0) {
      history.push("/about");
    }
  };

  useEventListener(eventType, (e) => {
    console.log(input);
    let number = Math.sign(e.deltaY);
    setInput(number);
  });
};

export default useTraverse;
