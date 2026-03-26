const fs = require('fs');
const path = require('path');
const convert = require('html-to-jsx');

const templateDir = path.join(__dirname, '../Orbit');
const outputDir = path.join(__dirname, 'src/app');
console.log('Template directory:', templateDir);
console.log('Output directory:', outputDir);

const pages = [
  { file: 'index.html', output: 'page.tsx' },
  { file: '404.html', output: 'not-found.tsx' },
  { file: 'portfolio-details.html', output: 'portfolio-details/page.tsx' },
  { file: 'privacy.html', output: 'privacy/page.tsx' },
  { file: 'service-details.html', output: 'service-details/page.tsx' },
  { file: 'starter-page.html', output: 'starter-page/page.tsx' },
  { file: 'terms.html', output: 'terms/page.tsx' },
];

// Helper to extract content between <main> tags
function extractMainContent(html) {
  const mainStart = html.indexOf('<main');
  const mainEnd = html.lastIndexOf('</main>');
  if (mainStart === -1 || mainEnd === -1) {
    return html; // fallback
  }
  // Find the closing > of the opening main tag
  const openTagEnd = html.indexOf('>', mainStart);
  // Extract content between openTagEnd and mainEnd
  return html.substring(openTagEnd + 1, mainEnd);
}

pages.forEach(({ file, output }) => {
  const inputPath = path.join(templateDir, file);
  if (!fs.existsSync(inputPath)) {
    console.warn(`File ${file} not found, skipping.`);
    return;
  }
  
  const html = fs.readFileSync(inputPath, 'utf8');
  const mainContent = extractMainContent(html);
  const jsx = convert(mainContent);
  
  // Ensure output directory exists
  const outputFullPath = path.join(outputDir, output);
  const outputDirPath = path.dirname(outputFullPath);
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  
  // Component name derived from output file
  const componentName = output === 'page.tsx' ? 'HomePage' :
    output === 'not-found.tsx' ? 'NotFound' :
    output.split('/')[0].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page';
  
  const component = `import React, { useEffect } from 'react';

export default function ${componentName}() {
  useEffect(() => {
    // Reinitialize any client-side scripts if needed
  }, []);

  return (
    ${jsx}
  );
}
`;
  
  fs.writeFileSync(outputFullPath, component);
  console.log(`Converted ${file} -> ${output}`);
});

console.log('All pages converted.');