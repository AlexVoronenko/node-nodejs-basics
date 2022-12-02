import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { join, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async (args) => {
  const scriptPath = join(__dirname, 'files', 'script.js');
  fork(scriptPath, args);
  console.log("Hello! Enter text. (press 'Ctrl+C' for exit)\n");
};

spawnChildProcess();