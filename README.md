# Portfolio-React

## Table of contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Purpose

A website built with React.js to show my work when applying for a job.

### The challenge

Users should be able to:

- reach the corresponding title by clicking on the navigation.
- see the developer's name, photos, and links to sections about developer, works, and how to contact developer.
- click the links of applications to transfer into GitHub and deployed application.

### Screenshot

![](./src/assets/images/Porfolio%20-%20Longyang.png)
![](./src/assets/images/Portfolio%20-%20Longyang1.png)
![](./src/assets/images/Porfolio%20-%20Longyang2.png)
![](./src/assets/images/Portfolio%20-%20Longyang3.png)

### Links

- Solution URL: [https://github.com/YangLongWang/Portfolio-React](https://github.com/YangLongWang/Portfolio-React)
- Live Site URL: [https://yanglongwang.github.io/Portfolio-React/](https://yanglongwang.github.io/Portfolio-React/)

## My process

### Build with

- React.js
- CSS
- Bootstrap

### What I learned

- practice using bootstrap
- practice building with React components
- deployment app on Github

To see how I add code snippets, see below:

```JS
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

```

## Author

- Github - [Longyang Wang](https://github.com/YangLongWang)
