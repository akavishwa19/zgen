#!/usr/bin/env node

import generateApi from './command/generateApi';
import defineConfig from './prompt/cli';

async function bootstrap() {
  await defineConfig();
  await generateApi();
}

bootstrap()
  .then(() => {
    console.log('Bootstrap completed successfully.');
  })
  .catch((error) => {
    console.error('Error during bootstrap:', error);
    throw new Error(error);
  });
