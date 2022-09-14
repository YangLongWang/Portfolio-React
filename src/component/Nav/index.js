import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  const categories = [
    {
      name: "about me",
      description: "Hello! My name is Longyang Wang. It's a full-stack developer.",
    },
    {
      name: "portfolio",
      description: "Here are some apps on my Github, if you want to see more, please check my Github link on the footer.",
    },
    {
      name: "contact",
      description: "Welcome to contact me.",
    },
    {
      name: "resume",
      description: "",
    },
  ];
  
  function categorySelected(e) {
    console.log(e)
  }

  return (
    <nav>
      <ul>
        {/* <li>
          <span>About me</span>
        </li>
        <li>
          <span>Portfolio</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
        <li>
          <span>Resume</span>
        </li> */}
        {categories.map((category) => (
          <li
            className=''
            key={category.name}
          >
            <span onClick={() => {categorySelected(category.name)}}>
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;