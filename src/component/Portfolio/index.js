import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <section>
      <div>
        <h2>Portfolio</h2>
        <p className="text-center">
          Here are some apps on my Github, if you want to see more, please check
          my Github link at contact me.
        </p>
        <Project></Project>
      </div>
    </section>
  );
}

export default Portfolio;
