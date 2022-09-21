import React from "react";

function Footer() {
  return (
    <footer>
      <div class="d-flex flex-row justify-content-center p-3 mt-5">
        <a href="https://github.com/YangLongWang" class="list-group-item mx-3">
          <i class="fa-brands fa-square-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/longyang-wang/"
          class="list-group-item mx-3"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" class="list-group-item mx-3">
          <i class="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
