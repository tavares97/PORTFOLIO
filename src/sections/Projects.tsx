import gsap from "gsap";
import { myProjects } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: "previous" | "next") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];
  return (
    <section className="c-space my-20" id="work">
      <p className="head-text"> My Work</p>

      <div className="mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>

            <p className="animatedText font-suse">{currentProject.desc}</p>
            <p className="animatedText font-suse">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <p
              className="text-white font-suse underline underline-offset-2 cursor-pointer"
              onClick={() =>
                window.open(currentProject.link, "_blank", "noreferrer")
              }
            >
              Check it out on git
            </p>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
