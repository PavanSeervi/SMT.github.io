const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define the EJS file paths
const files = ['index', 'paints', 'electrical', 'hardware', 'sanitary', 'plumbing', 'checkout'];

files.forEach(file => {
    const templatePath = path.join(__dirname, 'views', `${file}.ejs`);
    const outputPath = path.join(__dirname, `${file}.html`);

    ejs.renderFile(templatePath, {}, (err, html) => {
        if (err) {
            console.error(`Error rendering ${file}.ejs:`, err);
            return;
        }

        fs.writeFileSync(outputPath, html);
        console.log(`${file}.html has been generated.`);
    });
});
