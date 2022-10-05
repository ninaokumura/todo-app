import { useState, useEffect } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prevMode => {
      const nextMode = !prevMode;
      localStorage.setItem("darkMode", String(nextMode));

      if (nextMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return nextMode;
    });
  }

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode") ?? "false");
    setDarkMode(isDarkMode);

    if (isDarkMode) {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <img src={sun} alt="sun icon" className="h-6 w-6" />
        ) : (
          <img src={moon} alt="moon icon" className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
