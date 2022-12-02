import { stdin, stdout } from 'process';
import { EOL } from 'os';
import { Transform } from 'stream';

const transform = async () => {

  const TransformReverse = () => {
    return new Transform({
      transform(chunk, enc, callback) {
        const transformData = chunk.toString().replace(EOL, '').split("").reverse().join("") + EOL;
        callback(null, transformData);
      }
    });
  };

  stdin.pipe(TransformReverse()).pipe(stdout);
};

await transform();