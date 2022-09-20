import React, { useState } from "react";
import Header from "./component/Header";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import ContactForm from "./component/Contact";
import Resume from "./component/Resume";
import Footer from "./component/Footer";
import Nav from "./component/Nav";

function App() {
  const [currentPage, setCurrentPage] = useState("About me");

  const renderPage = () => {
    if (currentPage === "About me") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <ContactForm />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <div className="d-flex justify-content-between py-4">
        <Header></Header>
        <Nav
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          className="align-self-end"
        ></Nav>
      </div>
      <main>{renderPage()}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
