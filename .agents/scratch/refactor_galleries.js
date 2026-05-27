const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../../components/category');
const files = fs.readdirSync(dirPath);

files.forEach(file => {
  if (file.endsWith('Gallery.tsx')) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Add next/image import if missing
    if (!content.includes('import Image from "next/image"')) {
      content = content.replace(
        /import\s+({?\s*useState\s*}?)\s+from\s+"react";?/,
        'import { useState } from "react";\nimport Image from "next/image";'
      );
      modified = true;
    }

    // 2. Refactor standard img to next/image inside aspect-ratio div
    // Pattern 1: aspect-[2/3]
    if (content.includes('className="aspect-[2/3] overflow-hidden"') && content.includes('<img')) {
      content = content.replace(
        /className="aspect-\[2\/3\] overflow-hidden"/g,
        'className="aspect-[2/3] overflow-hidden relative"'
      );
      content = content.replace(
        /<img\s+src={item\.image}\s+alt={item\.title}\s+className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"\s*\/>/g,
        `<Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />`
      );
      modified = true;
    }

    // Pattern 2: aspect-square (like in BaoBiGallery)
    if (content.includes('className="aspect-square overflow-hidden"') && content.includes('<img')) {
      content = content.replace(
        /className="aspect-square overflow-hidden"/g,
        'className="aspect-square overflow-hidden relative"'
      );
      content = content.replace(
        /<img\s+src={item\.image}\s+alt={item\.title}\s+className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"\s*\/>/g,
        `<Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Successfully refactored: ${file}`);
    } else {
      console.log(`Skipped (already refactored or different structure): ${file}`);
    }
  }
});
