const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

async function main() {
  const source = path.join(__dirname, '../fotograflar');
  const output = path.join(__dirname, '../public/images');
  await fs.mkdir(output, { recursive: true });
  const photos = (await fs.readdir(source)).filter(name => name.endsWith('.jpeg'));
  let before = 0;
  let after = 0;
  for (const name of photos) {
    const input = path.join(source, name);
    const target = path.join(output, name.replace('.jpeg', '.webp'));
    await sharp(input).rotate().resize({ width: 720, withoutEnlargement: true }).webp({ quality: 82 }).toFile(target);
    before += (await fs.stat(input)).size;
    after += (await fs.stat(target)).size;
  }
  await sharp(path.join(source, 'kasarli-pogaca.jpeg')).rotate().resize({ width: 1100 }).webp({ quality: 85 }).toFile(path.join(output, 'pogaca-hero.webp'));
  console.log(`${photos.length} product images: ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
