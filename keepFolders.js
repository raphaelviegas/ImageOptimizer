const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require("imagemin-webp");

// Optimize images
imagemin(['img/*.{jpg,png}', 'img/**/*.{jpg,png}'], {
  use: [
    imageminMozjpeg({ quality: 75 }),
    imageminPngquant({ quality: [0.65, 0.85] }),
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, 'optImg/')
  }
});

// Convert to WebP
imagemin(['img/*.{jpg,png}', 'img/**/*.{jpg,png}'], {
  use: [
    imageminWebp({ quality: 75 }),
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, 'optImg/')
  }
});