const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminWebp = require('imagemin-webp');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin(
    ['img/*.{jpg,png}', 'img/**/*.{jpg,png}'],
    {
      destination: 'optImg',
      plugins: [
        imageminMozjpeg({ quality: 75 }),
        // imageminWebp({ quality: 75 }),
        imageminPngquant()
      ]
    }
  );
  console.log(files);
})();