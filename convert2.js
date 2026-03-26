const fs = require('fs');
const path = require('path');
const { compile } = require('html-to-jsx');

const inputFile = path.join(__dirname, 'src/app/page.html');
const outputFile = path.join(__dirname, 'src/app/page.tsx');

let html = fs.readFileSync(inputFile, 'utf8');

// Remove HTML comments
html = html.replace(/<!--[\s\S]*?-->/g, '');

// Convert to JSX
const jsx = compile(html, {输出: 'string'});

// Wrap in component
const component = `import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Reinitialize any client-side scripts if needed
  }, []);

  return (
    ${jsx}
  );
}
`;

fs.writeFileSync(outputFile, component);
console.log('Conversion completed with html-to-jsx.');