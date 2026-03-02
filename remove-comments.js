const fs = require('fs');
const path = require('path');

function removeCommentsFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');


  content = content.replace(/\/\/.*$/gm, '');

  
  content = content.replace(/^\s*$/gm, '');

  
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.mjs')) {
      console.log(`Processing ${filePath}`);
      removeCommentsFromFile(filePath);
    }
  }
}


processDirectory('./app');
