import React, { useState } from "react";

function Project() {
  // const [screenshots] = useState([
  //   {
  //     name: "iBetter - Habits Tracker",
  //     description:
  //       "iBetter was developed to help you be better at tracking and accomplishing your good habits.",
  //     language: "HANDLEBARS/JAVASCRIPT/CSS",
  //     github: "https://github.com/Vinyldude8896/iBetter",
  //     deployment: "https://ibetter.herokuapp.com",
  //   },
  //   {
  //     name: "Movie Search",
  //     description: "A movie search website.",
  //     language: "HTML/JAVASCRIPT/BULMA/CSS",
  //     github: "https://github.com/EnzoTragnone/Movie-Search",
  //     deployment: "https://enzotragnone.github.io/Movie-Search/",
  //   },
  //   {
  //     name: "The Tech Blog",
  //     description:
  //       "A CMS-style blog site so that people can publish articles, blog posts, and any thoughts and opinions.",
  //     language: "HANDLEBARS/JAVASCRIPT/CSS",
  //     github: "https://github.com/YangLongWang/Tech-Blog",
  //     deployment: "https://tech-blog-app-6408.herokuapp.com",
  //   },
  //   {
  //     name: "Text Editor",
  //     description:
  //       "To create notes or code snippets with or without an internet connection.",
  //     language: "JAVASCRIPT",
  //     github: "https://github.com/YangLongWang/Text-Editor",
  //     deployment: "https://text-editor-app-6408.herokuapp.com/",
  //   },
  //   {
  //     name: "Weather Dashboard",
  //     description:
  //       "Seeing the weather outlook for multiple cities, travelers can plan a trip accordingly",
  //     language: "HTML/JAVASCRIPT/CSS",
  //     github: "https://github.com/YangLongWang/Weather-Dashboard",
  //     deployment: "https://yanglongwang.github.io/Weather-Dashboard/",
  //   },
  //   {
  //     name: "Coding Quiz",
  //     description: "Practice coding assignment",
  //     language: "HTML/JAVASCRIPT/CSS",
  //     github: "https://github.com/YangLongWang/Coding-Quiz",
  //     deployment: "https://yanglongwang.github.io/Coding-Quiz/",
  //   },
  // ]);

  // function MouseOver(e) {
  //   e.target.style.opacity = 0.4;
  //   return (
  //     <div>
  //       <p>Github</p>
  //     </div>
  //   );
  // }
  // function MouseOut(e) {
  //   e.target.style.opacity = 1;
  // }

  return (
    <div className="d-flex justify-content-center align-content-between flex-wrap mt-3 mx-5">
      {/* {screenshots.map((image, i) => (
        <div>
          <div className="pic">
            <img
              src={require(`../../assets/projects/${i}.png`)}
              alt={image.name}
              className="project"
              key={image.name}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}
            />
            <div className="eye">
              <p>
                <a href={image.github}>Github</a>
                <a href={image.deployment}>deployment</a>
              </p>
            </div>
          </div>
        </div>
      ))} */}
      <div className="pic pic-1">
        <div className="eye eye-1 d-flex flex-column justify-content-around align-items-center p-2">
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://github.com/Vinyldude8896/iBetter">
              GitHub Repository
            </a>
          </button>
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://ibetter.herokuapp.com">App Deployment</a>
          </button>
        </div>
      </div>
      <div className="pic pic-2">
        <div className="eye eye-2 d-flex flex-column justify-content-around align-items-center p-2">
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://github.com/EnzoTragnone/Movie-Search">
              GitHub Repository
            </a>
          </button>
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://enzotragnone.github.io/Movie-Search/">
              App Deployment
            </a>
          </button>
        </div>
      </div>
      <div3 className="pic pic-3">
        <div className="eye eye-3> d-flex flex-column justify-content-around align-items-center p-2">
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://github.com/YangLongWang/Tech-Blog">
              GitHub Repository
            </a>
          </button>
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://tech-blog-app-6408.herokuapp.com">
              App Deployment
            </a>
          </button>
        </div>
      </div3>
      <div className="pic pic-4">
        <div className="eye eye-4 d-flex flex-column justify-content-around align-items-center p-2">
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://github.com/YangLongWang/Text-Editor">
              GitHub Repository
            </a>
          </button>
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://text-editor-app-6408.herokuapp.com/">
              App Deployment
            </a>
          </button>
        </div>
      </div>
      <div className="pic pic-5">
        <div className="eye eye-5 d-flex flex-column justify-content-around align-items-center p-2">
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://github.com/YangLongWang/Weather-Dashboard">
              GitHub Repository
            </a>
          </button>
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://yanglongwang.github.io/Weather-Dashboard/">
              App Deployment
            </a>
          </button>
        </div>
      </div>
      <div className="pic pic-6">
        <div className="eye eye-6 d-flex flex-column justify-content-around align-items-center p-2">
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://github.com/YangLongWang/Coding-Quiz">
              GitHub Repository
            </a>
          </button>
          <button className="border border-light border-2 rounded-3 p-1">
            <a href="https://yanglongwang.github.io/Coding-Quiz/">
              App Deployment
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
