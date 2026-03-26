const fs = require('fs');
const path = require('path');
const convert = require('html-to-jsx');

const inputFile = path.join(__dirname, 'src/app/page.html');
const outputFile = path.join(__dirname, 'src/app/page.tsx');

let html = fs.readFileSync(inputFile, 'utf8');

// Convert to JSX
let jsx = convert(html);

// Remove any extra root div added by library if we already have a single root.
// The library adds a div if there are multiple root nodes.
// We'll keep it as is; it's fine.

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
console.log('Conversion completed.');