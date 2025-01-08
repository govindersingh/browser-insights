const fs = require('fs');
const { minify } = require('terser');
const path = require('path');

const minifyCode = async () => {
  const filePath = path.join(__dirname, 'index.js');

  if (fs.existsSync(filePath)) {
    const file = fs.readFileSync(filePath, 'utf8');
    
    try {
      const result = await minify(file, { sourceMap: true });
      
      if (result.error) {
        console.error("Minification error:", result.error);
      } else {
        fs.writeFileSync('browser-insights.min.js', result.code);
        console.log('Minification complete: browser-insights.min.js created');
      }
    } catch (error) {
      console.error("Error during minification:", error);
    }
  } else {
    console.error(`The file ${filePath} does not exist in the directory.`);
  }
};

minifyCode();
