import { stdout } from 'process';
import { createReadStream } from 'node:fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const fileName = join(__dirname, "files", "fileToRead.txt");

  createReadStream(fileName).pipe(stdout);
};

await read();