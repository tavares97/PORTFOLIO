export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "REAL ESTATE",
    desc: "A fullstack web application that simulates a real estate app. This app is build using MERN Stack and allows me to upgrade my skills in the backend world",
    subdesc: "Allows users to list, favorite and search for their next home.",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongo.png",
      },
    ],
    link: "https://github.com/tavares97/REAL_ESTATE",
  },
  {
    title: "Netflix Clone",
    desc: "An app that replicates the feel and functionality of Netflix",
    subdesc:
      "This app is built with the sole propose of developing my skills even further",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
    link: "https://github.com/tavares97/netflix-clone",
  },
];

export const calculateSizes = (isSmall: boolean, isMobile: boolean) => {
  return {
    laptopScale: isSmall ? 0.4 : isMobile ? 0.5 : 0.7,
    laptopPosition: isSmall
      ? [0, -1, 0.41]
      : isMobile
      ? [0, -1, 0.41]
      : [0, -3, 0.41],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Shiji",
    pos: "Senior Software Engineer",
    duration: "03/2023 - Present",
    title:
      "Led feature upgrades for a reservation management app, boosting performance and user experience by fostering effective backend-QA collaboration. Delivered regular client demos and adhered to top industry coding practices for enhanced reliability and long-term app performance.",
    animation: "dance1",
    icon: "/assets/shiji.png",
  },
  {
    id: 2,
    name: "XGeeks",
    pos: "Software Engineer",
    duration: "06/2022 - 02/2023",
    title:
      "Implemented new features for an internal management tool, enhancing efficiency and usability through close collaboration with the backend team. Maintained high standards for reliability and user satisfaction.",
    icon: "/assets/xgeek.png",
    animation: "idle2",
  },
  {
    id: 3,
    name: "LEAN BKRY",
    pos: "Frontend Developer",
    duration: "07/2021 - 06/2022",
    title:
      "Developed and managed multiple websites as a web specialist, using diverse frameworks to consistently exceed client expectations. Translated designs into engaging, user-friendly interfaces.",
    icon: "/assets/lean.png",
    animation: "stretching",
  },
  {
    id: 4,
    name: "Siemens",
    pos: "Fullstack Developer (INTERN)",
    duration: "06/2019 - 08/2020",
    title:
      "Enhanced the visual appeal and efficiency of a legacy web application, showcasing versatility by transitioning from backend unit testing to a key frontend role.",
    icon: "/assets/siemens.png",
    animation: "looking around",
  },
];
