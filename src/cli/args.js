import { argv } from 'node:process';

const parseArgs = () => {
  let result = [];

  argv.forEach((value, index, array) => {
    if (value.startsWith("--") && (index < array.length)) {
      result.push(`${value.slice(2)} is ${array[index + 1]}`);
    }
  });

  console.log(result.join(", "));
};

parseArgs();