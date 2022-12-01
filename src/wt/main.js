import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./src/wt/worker.js', { workerData });
    worker.postMessage(workerData);
    worker.postMessage(workerData);
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
};

const performCalculations = async () => {
  const numCPUs = cpus().length;

  const workerResult = [];

  for (let index = 0; index < numCPUs; index++) {
    const worker = runService(index + 10);
    workerResult.push(worker);
  }

  const workersResult = await Promise.allSettled(workerResult);

  const result = workersResult.map(({ status, value }) => {
    return {
      status: status === 'fulfilled' ? 'resolved' : 'error',
      data: value ? value : null
    };
  });
  console.log(result);
};

await performCalculations();