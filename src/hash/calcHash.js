import { readFile } from 'node:fs/promises';
import { join } from 'path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {

  const hash = createHash("sha256");
  const fileContents = await readFile(join(__dirname, "files", "fileToCalculateHashFor.txt"), { encoding: 'utf8' });

  console.log(hash.update(fileContents).digest('hex'));
};

await calculateHash();