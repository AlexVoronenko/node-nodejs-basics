import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { join } from 'path';
import { pipeline } from 'node:stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const srcFile = join(__dirname, "files", "archive.gz");
  const dstFile = join(__dirname, "files", "fileToCompress.txt");

  const guzip = createGunzip();
  const source = createReadStream(srcFile);
  const destination = createWriteStream(dstFile);

  pipeline(source, guzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });
};

await decompress();