import sharp from 'sharp';

await sharp('favicon.png').raw().toBuffer();