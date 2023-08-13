const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'node_modules', 'payload', 'dist', 'admin', 'scss', 'app.scss');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const lines = data.trim().split('\n');

  if (lines[lines.length - 1].includes('@import \'~payload-user-css\';')) {
    // Remove the last line
    lines.pop();

    const modifiedContent = lines.join('\n');

    fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }
      console.log('Last line removed successfully!');
    });
  } else {
    console.log('Last line does not contain the import, no action needed.');
  }
});