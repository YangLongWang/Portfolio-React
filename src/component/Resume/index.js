import React from "react";

// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my{" "}
        <a href="../../assets/resume/Longyang Resume.docx">resume</a>
      </p>
      <h3>skills</h3>
      <h4>Front-end</h4>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h4>Back-end</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
