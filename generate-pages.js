const fs = require('fs');
const path = require('path');

const templateDir = path.join(__dirname, '../Orbit');
const outputDir = path.join(__dirname, 'src/app');

const pages = [
  { file: 'index.html', output: 'page.tsx', name: 'HomePage' },
  { file: '404.html', output: 'not-found.tsx', name: 'NotFound' },
  { file: 'portfolio-details.html', output: 'portfolio-details/page.tsx', name: 'PortfolioDetailsPage' },
  { file: 'privacy.html', output: 'privacy/page.tsx', name: 'PrivacyPage' },
  { file: 'service-details.html', output: 'service-details/page.tsx', name: 'ServiceDetailsPage' },
  { file: 'starter-page.html', output: 'starter-page/page.tsx', name: 'StarterPagePage' },
  { file: 'terms.html', output: 'terms/page.tsx', name: 'TermsPage' },
];

// Helper to extract content between <main> tags
function extractMainContent(html) {
  const mainStart = html.indexOf('<main');
  const mainEnd = html.lastIndexOf('</main>');
  if (mainStart === -1 || mainEnd === -1) {
    return html; // fallback
  }
  const openTagEnd = html.indexOf('>', mainStart);
  return html.substring(openTagEnd + 1, mainEnd);
}

// Process HTML string
function processHtml(html) {
  // Replace asset paths: assets/ -> /assets/
  let processed = html.replace(/src="assets\//g, 'src="/assets/');
  processed = processed.replace(/href="assets\//g, 'href="/assets/');
  // Replace internal links: *.html -> remove .html and add leading slash
  processed = processed.replace(/href="([a-zA-Z0-9-]+)\.html/g, 'href="/$1');
  // Replace href="index.html" -> href="/"
  processed = processed.replace(/href="index\.html/g, 'href="/"');
  // Remove any remaining .html extensions (like contact.html -> /contact)
  processed = processed.replace(/href="([a-zA-Z0-9-]+)\.html"/g, 'href="/$1"');
  // Replace form actions for contact and newsletter
  processed = processed.replace(/action="forms\/contact\.php"/g, 'action="/api/contact"');
  processed = processed.replace(/action="forms\/newsletter\.php"/g, 'action="/api/newsletter"');
  // Ensure trailing slashes for root links
  // (optional)
  return processed;
}

pages.forEach(({ file, output, name }) => {
  const inputPath = path.join(templateDir, file);
  if (!fs.existsSync(inputPath)) {
    console.warn(`File ${file} not found, skipping.`);
    return;
  }
  
  const html = fs.readFileSync(inputPath, 'utf8');
  const mainContent = extractMainContent(html);
  const processed = processHtml(mainContent);
  
  // Escape backticks and backslashes for template literal
  const escaped = processed.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  
  const component = `import HtmlContent from '@/components/HtmlContent';

export default function ${name}() {
  const html = \`${escaped}\`;
  
  return <HtmlContent html={html} />;
}
`;
  
  const outputFullPath = path.join(outputDir, output);
  const outputDirPath = path.dirname(outputFullPath);
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  
  fs.writeFileSync(outputFullPath, component);
  console.log(`Generated ${output}`);
});

console.log('All pages generated.');