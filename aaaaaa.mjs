import sharp from 'sharp';

const mask = sharp(
    '1f914.svg',
    { density: 1000 }
    )
    .resize(96, 96, {
        fit: 'inside',
        withoutEnlargement: false,
    })
    .clone()
    .normalise()
    .greyscale()
    .linear(2, -(128 * 2) + 128)
    .flatten({ background: '#000' })
    .toColorspace('b-w')

mask.clone().png().toFile('aaaaa.png')

await sharp({
        create: { width: 96, height: 96, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
    })
    .pipelineColourspace('b-w')
    .boolean(await mask.png().toBuffer(), 'eor')
    .png()
    .toFile('aaaaa2.png');
