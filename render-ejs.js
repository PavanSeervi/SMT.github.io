const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Paths to your views and output folder
const viewsPath = path.join(__dirname, 'views');
const outputPath = path.join(__dirname, 'dist');

// Ensure the output directory exists
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}

// Render function to convert EJS to HTML
const renderEJS = (filename) => {
    const filePath = path.join(viewsPath, filename);
    ejs.renderFile(filePath, {}, (err, html) => {
        if (err) {
            console.error(`Error rendering ${filename}:`, err);
        } else {
            const outputFilename = filename.replace('.ejs', '.html');
            fs.writeFileSync(path.join(outputPath, outputFilename), html);
            console.log(`${outputFilename} has been created.`);
        }
    });
};

// List of your EJS files
const ejsFiles = [
    'index.ejs',
    'paints.ejs',
    'electrical.ejs',
    'hardware.ejs',
    'sanitary.ejs',
    'plumbing.ejs',
    'checkout.ejs'
];

// Render each file
ejsFiles.forEach(renderEJS);
