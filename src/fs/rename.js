import { join } from 'path';
import { rename as renameFile, access, constants } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldFile = join(__dirname, "files", "wrongFilename.txt");
  const newFile = join(__dirname, "files", "properFilename.md");

  const isFileExist = async (path) => {
    try {
      await access(path, constants.F_OK);
      return true;
    } catch {
      return false;
    }
  }

  if (await isFileExist(newFile)) {
    throw new Error("FS operation failed");
  } else {
    try {
      await renameFile(oldFile, newFile);
    } catch (error) {
      throw new Error("FS operation failed");
    }
  }



};

await rename();