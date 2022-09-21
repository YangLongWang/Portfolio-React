import React from "react";

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        Download my{" "}
        <a
          href={require("../../assets/resume/Longyang Resume.docx")}
          download="Longyang Resume.docx"
        >
          resume
        </a>
      </p>
      <h3>skills</h3>
      <h5>Front-end Proficiencies</h5>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h5>Back-end Proficiencies</h5>
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
