import { join } from 'path';
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderName = join(__dirname, "files");

  try {
    const list = await readdir(folderName, { withFileTypes: true });

    for (const file of list) {
      if (file.isFile()) console.log(file.name);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }

};

await list();