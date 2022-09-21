import React, { useState } from "react";

// need hover effect

// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

function Project() {
  const [screenshots] = useState([
    {
      name: "iBetter - Habits Tracker",
      description:
        "iBetter was developed to help you be better at tracking and accomplishing your good habits.",
      language: "HANDLEBARS/JAVASCRIPT/CSS",
      github: "https://github.com/Vinyldude8896/iBetter",
      deployment: "https://ibetter.herokuapp.com",
    },
    {
      name: "Movie Search",
      description: "A movie search website.",
      language: "HTML/JAVASCRIPT/BULMA/CSS",
      github: "https://github.com/EnzoTragnone/Movie-Search",
      deployment: "https://enzotragnone.github.io/Movie-Search/",
    },
    {
      name: "The Tech Blog",
      description:
        "A CMS-style blog site so that people can publish articles, blog posts, and any thoughts and opinions.",
      language: "HANDLEBARS/JAVASCRIPT/CSS",
      github: "https://github.com/YangLongWang/Tech-Blog",
      deployment: "https://tech-blog-app-6408.herokuapp.com",
    },
    {
      name: "Text Editor",
      description:
        "To create notes or code snippets with or without an internet connection.",
      language: "JAVASCRIPT",
      github: "https://github.com/YangLongWang/Text-Editor",
      deployment: "https://text-editor-app-6408.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      description:
        "Seeing the weather outlook for multiple cities, travelers can plan a trip accordingly",
      language: "HTML/JAVASCRIPT/CSS",
      github: "https://github.com/YangLongWang/Weather-Dashboard",
      deployment: "https://yanglongwang.github.io/Weather-Dashboard/",
    },
    {
      name: "Coding Quiz",
      description: "Practice coding assignment",
      language: "HTML/JAVASCRIPT/CSS",
      github: "https://github.com/YangLongWang/Coding-Quiz",
      deployment: "https://yanglongwang.github.io/Coding-Quiz/",
    },
  ]);

  return (
    <div className="d-flex justify-content-center align-content-between flex-wrap mt-3 mx-5">
      {screenshots.map((image, i) => (
        <img
          src={require(`../../assets/projects/${i}.png`)}
          alt={image.name}
          className="project"
          key={image.name}
        />
      ))}
      <>
        <p>
          <a href={screenshots.github}>GitHub</a>
        </p>
      </>
    </div>
  );
}

export default Project;
