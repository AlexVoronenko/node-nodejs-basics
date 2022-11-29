const parseEnv = () => {
  const processEnv = process.env;
  let parseVariables = [];

  for (const key in processEnv) {
    if (key.startsWith("RSS_")) parseVariables.push(`${key}=${processEnv[key]}`);
  }

  console.log(parseVariables.join("; "));
};

parseEnv();