import { stdin } from 'process';
import { createWriteStream } from 'node:fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const fileName = join(__dirname, "files", "fileToWrite.txt");

  stdin.pipe(createWriteStream(fileName));
};

await write();