import { join } from 'path';
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {

  const folderSrc = join(__dirname, "files");
  const folderDst = join(__dirname, "files_copy");

  (async function copyFilesAndFolders(folderSrc, folderDst) {
    try {
      await mkdir(folderDst);
      const files = await readdir(folderSrc, { withFileTypes: true });

      for (const file of files) {
        const pathSrc = join(folderSrc, file.name);
        const pathDst = join(folderDst, file.name);

        if (file.isFile()) {
          await copyFile(pathSrc, pathDst)
        } else {
          copyFilesAndFolders(pathSrc, pathDst);
        }
      }
    } catch (error) {
      throw new Error("FS operation failed");
    }
  })(folderSrc, folderDst);

};

copy();