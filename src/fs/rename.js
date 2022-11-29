import { join } from 'path';
import { rename as renameFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldFile = join(__dirname, "files", "wrongFilename.txt");
  const newFile = join(__dirname, "files", "properFilename.md");

  try {
    await renameFile(oldFile, newFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }

};

await rename();