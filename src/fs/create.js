import { join } from 'path';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, "files", 'fresh.txt');
  const data = "I am fresh and young";
  const promise = writeFile(filePath, data, { flag: 'wx' });

  try {
    await promise;
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();