import sharp from 'sharp';
import { readdirSync } from 'fs';

const files = readdirSync('./assets').filter(f => f.endsWith('.svg'));

for (const file of files) {
  const name = file.replace('.svg', '.webp');
  await sharp('./assets/' + file)
    .webp({ quality: 80 })
    .toFile('./assets/' + name);
  console.log('Converti : ' + name);
}
