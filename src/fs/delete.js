import { join } from 'path';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const file = join(__dirname, "files", "fileToRemove.txt");

  try {
    await rm(file);
  } catch (error) {
    throw new Error("FS operation failed");
  }

};

await remove();