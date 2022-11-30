import { argv } from 'node:process';

const parseArgs = () => {
  let result = [];

  argv.slice(2).forEach((value, index, array) => {
    if (value.startsWith("--") && (index + 1 < array.length)) {
      result.push(`${value.slice(2)} is ${array[index + 1]}`);
    }
  });

  console.log(result.join(", "));
};

parseArgs();