import React from "react";
import myPhoto from "../../assets/images/touxiang.jpg";

function About() {
  return (
    <section>
      <h2>About me</h2>
      {/* <img
        src={myPhoto}
        className=""
        style={{ width: "20%" }}
        alt="this is me"
      />
      <p>Hello! My name is Longyang Wang. I'm a full-stack developer.</p> */}
      <div class="d-flex flex-column  align-items-center justify-content-center">
        <div class="photo"></div>
        <div class="my-3">
          <p>Hello! My name is Longyang Wang. I'm a full-stack developer.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
