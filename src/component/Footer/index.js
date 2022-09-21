import React from "react";

function Footer() {
  return (
    <footer>
      <div className="d-flex flex-row justify-content-center p-3 mt-5">
        <a
          href="https://github.com/YangLongWang"
          className="list-group-item mx-3"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/longyang-wang/"
          class="list-group-item mx-3"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/18367848/longyang-wang?tab=profile"
          className="list-group-item mx-3"
        >
          <i className="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <p>© 2022 Longyang Wang</p>
      </div>
    </footer>
  );
}

export default Footer;
