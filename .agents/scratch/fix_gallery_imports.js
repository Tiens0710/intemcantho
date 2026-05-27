const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../../components/category');
const files = fs.readdirSync(dirPath);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<Image') && !content.includes('import Image from "next/image"')) {
      // Add import at the top after "use client";
      if (content.includes('"use client";')) {
        content = content.replace(
          /"use client";\r?\n/,
          '"use client";\n\nimport Image from "next/image";\n'
        );
      } else if (content.includes("'use client';")) {
        content = content.replace(
          /'use client';\r?\n/,
          "'use client';\n\nimport Image from 'next/image';\n"
        );
      } else {
        content = 'import Image from "next/image";\n' + content;
      }
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed import in: ${file}`);
    }
  }
});
