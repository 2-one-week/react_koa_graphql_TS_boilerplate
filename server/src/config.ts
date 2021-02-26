const parseStrEnv = (envName: string, defaultValue?: string) => {
  const value = process.env[envName];

  if (value == null && defaultValue == null) {
    throw new Error(`${envName} is not defined`);
  }

  return value ?? defaultValue;
};

// server env
const SERVER_PORT = parseStrEnv('SERVER_PORT');

// mongodb env
const DB_HOST = parseStrEnv('DB_HOST');
const DB_NAME = parseStrEnv('DB_NAME');

export { SERVER_PORT, DB_HOST, DB_NAME };
