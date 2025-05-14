import { config } from '~/config';
import { buildServer } from '~/server';

const start = async () => {
  const server = await buildServer();

  try {
    await server.listen({ port: config.port, host: config.host });
    console.log(`Server is running at http://${config.host}:${config.port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
