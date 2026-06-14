import { useState, useEffect } from "react";
import "./HomePreview.css";

import preview1 from "../../../assets/app-preview/home-screen.png";
import preview2 from "../../../assets/app-preview/stats-screen.png";
import preview3 from "../../../assets/app-preview/transactions-screen.png";
import preview4 from "../../../assets/app-preview/goals-screen.png";
import preview5 from "../../../assets/app-preview/profile-screen.png";

const previews = [
    preview1,
    preview2,
    preview3,
    preview4,
    preview5,
];

function HomePreview() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          (prevIndex + 1) % previews.length
        );
        setIsVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [previews.length]);

  return (
    <div className="home-preview">
      <img
        src={previews[currentIndex]}
        alt={`Vista previa ${currentIndex + 1}`}
        className={`home-preview__image ${
          isVisible ? "visible" : ""
        }`}
      />
    </div>
  );
}

export default HomePreview;