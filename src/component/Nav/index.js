import React, { useEffect } from "react";

function Nav({ currentPage, handlePageChange }) {
  useEffect(() => {
    document.title = "Longyang - " + currentPage;
  });

  return (
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About me")}
          className={
            currentPage === "About me" ? "nav-link active" : "nav-link"
          }
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;
