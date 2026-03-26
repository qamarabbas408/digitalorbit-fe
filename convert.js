const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src/app/page.html');
const outputFile = path.join(__dirname, 'src/app/page.tsx');

let html = fs.readFileSync(inputFile, 'utf8');

// Replace class= with className=
html = html.replace(/\bclass=/g, 'className=');
// Replace for= with htmlFor=
html = html.replace(/\bfor=/g, 'htmlFor=');
// Replace tabindex with tabIndex
html = html.replace(/\btabindex=/g, 'tabIndex=');
// Replace readonly with readOnly
html = html.replace(/\breadonly=/g, 'readOnly=');
// Replace maxlength with maxLength
html = html.replace(/\bmaxlength=/g, 'maxLength=');
// Replace cellpadding with cellPadding
html = html.replace(/\bcellpadding=/g, 'cellPadding=');
// Replace cellspacing with cellSpacing
html = html.replace(/\bcellspacing=/g, 'cellSpacing=');
// Replace colspan with colSpan
html = html.replace(/\bcolspan=/g, 'colSpan=');

// Self-close tags: img, br, hr, input, etc.
html = html.replace(/<img([^>]*[^/])>/g, '<img$1 />');
html = html.replace(/<br([^>]*[^/])>/g, '<br$1 />');
html = html.replace(/<hr([^>]*[^/])>/g, '<hr$1 />');
html = html.replace(/<input([^>]*[^/])>/g, '<input$1 />');

// Replace data-aos attributes (they are fine)
// Replace href with href (no change)
// Add React-specific attributes like crossOrigin
html = html.replace(/crossorigin/g, 'crossOrigin');

// Wrap in a functional component
const component = `import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Initialize any client-side effects here
  }, []);

  return (
    <>
      ${html}
    </>
  );
}
`;

fs.writeFileSync(outputFile, component);
console.log('Conversion completed.');