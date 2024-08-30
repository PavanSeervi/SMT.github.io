const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Paths
const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'public');

// Example data (you can modify as needed)
const data = {
    cartCount: 0 // Replace with actual data if needed
};

// List of EJS files
const files = ['index.ejs', 'paints.ejs', 'electrical.ejs', 'hardware.ejs', 'sanitary.ejs', 'plumbing.ejs'];

// Render each file
files.forEach(file => {
    const ejsPath = path.join(viewsDir, file);
    const htmlPath = path.join(outputDir, file.replace('.ejs', '.html'));

    ejs.renderFile(ejsPath, data, (err, str) => {
        if (err) {
            console.error(`Error rendering ${file}:`, err);
            return;
        }
        fs.writeFileSync(htmlPath, str);
        console.log(`Rendered ${file} to ${htmlPath}`);
    });
});
