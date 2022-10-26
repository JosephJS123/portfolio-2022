import React from "react";
import prueba from "../img/intro.svg";
import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "Almacén y Distribución",
      techStack: "React, Redux, TailwindCSS, MySQL, NodeJS",
      description:
        "Sistema de mantenimiento, procesamiento y distribución de productos.",
      github: "https://github.com/ikurotime/Svelte-Twilio-chat",
      image: "ayd",
      link: "https://techtalks.davidhuertas.dev",
      id: "1",
    },
    {
      title: "G&M Page",
      techStack: "React, ContextAPI, Framer Motion",
      description:
        "Proyecto realizado para una empresa de shows y decoraciones.",
      github: "https://github.com/JosephJS123/page-G-M",
      image: "gym",
      link: "https://produccionesgym.netlify.app/",
      id: "2",
    },
    {
      title: "This Portfolio",
      techStack: "React, Custom Hooks, TailwindCSS",
      description: "This portfolio website. You can see the code here.",
      github: "https://github.com/JosephJS123/page-G-M",
      image: "intro",
      link: "https://produccionesgym.netlify.app/",
      id: "3",
    },
    {
      title: "Almacén y Distribución",
      techStack: "React, Redux, TailwindCSS, MySQL, NodeJS",
      description:
        "Sistema de mantenimiento, procesamiento y distribución de productos.",
      github: "https://github.com/ikurotime/Svelte-Twilio-chat",
      image: "ayd",
      link: "https://techtalks.davidhuertas.dev",
      id: "4",
    },
    {
      title: "G&M Page",
      techStack: "React, ContextAPI, Framer Motion",
      description:
        "Proyecto realizado para una empresa de shows y decoraciones.",
      github: "https://github.com/JosephJS123/page-G-M",
      image: "gym",
      link: "https://produccionesgym.netlify.app/",
      id: "5",
    },
    {
      title: "This Portfolio",
      techStack: "React, ContextAPI, TailwindCSS",
      description: "This portfolio website. You can see the code here.",
      github: "https://github.com/JosephJS123/page-G-M",
      image: "intro",
      link: "https://produccionesgym.netlify.app/",
      id: "6",
    },
  ];

  return (
    <div id="Projects">
      <h2
        className="my-10 text-4xl sm:text-5xl font-bold border-b-8 border-solid border-[#3b82f6] w-fit mx-auto"
      >
        PROJECTS
      </h2>
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            github={project.github}
            img={project.image}
            link={project.link}
            key={project.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
