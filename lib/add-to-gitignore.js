const fs = require('fs');
const { exec } = require('child_process');

const lineToAdd = '.env';

fs.readFile('.gitignore', 'utf8', (err, data) => {
  if (err && err.code !== 'ENOENT') {
    console.error(`❌ Failed to read .gitignore: ${err}`);
    return;
  }

  if (data && data.includes(lineToAdd)) {
    console.log('ℹ️ .env already in .gitignore');
  } else {
    fs.appendFile('.gitignore', `${lineToAdd}\n`, (err) => {
      if (err) {
        console.error(`❌ Failed to write to .gitignore: ${err}`);
      } else {
        console.log('✅ Added .env to .gitignore');
      }
    });
  }
});
