import React from 'react';

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 

function Footer() {
  return (
    <footer>
      <ul>
        <li>GitHub</li>
        <li>Linkedin</li>
        <li>Stack Overflow</li>
      </ul>
    </footer>
  );
}

export default Footer;