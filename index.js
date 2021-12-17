import im from 'imagemagick';

import Jimp from 'jimp'
import rgbHex from 'rgb-hex'

async function main (argument) {
	const img =  Jimp.read('./download.jpg').then( async image => {
		const {r,g,b,a} = await  Jimp.intToRGBA(image.getPixelColor(5,5))
		let hexa = await rgbHex(r,g,b)
		console.log(hexa)
		await convert('./download.jpg', hexa)	
	})
}
main()

function convert (img, hexa) {
	im.convert(
    [img, '-fuzz', '20%', '-transparent', `#${hexa}`, 'lkjlkjlklj.png'],
    function (err, stdout) {
      if (err) {
        console.log(err)
      }
      console.log(stdout)
    },
  );
}



// const path = require('path')
// const getColors = require('get-image-colors')
 
// const options = {
//   count: 10,
//   type: 'image/jpeg'
// }
// getColors(path.join(__dirname, 'result.jpg'), options).then(colors => {
// 	console.log(colors);
//   // `colors` is an array of 10 color objects
// })

// const path = require('path')
// const { extractColors } = require('extract-colors')

// const src = path.join(__dirname, './result.jpg')

// extractColors(src)
//   .then(console.log)
//   .catch(console.log)
