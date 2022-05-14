import sharp from 'sharp';

await sharp('favicon.png').toBuffer();
