const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');
const { config } = require('dotenv');

config({ path: path.resolve(__dirname, '..', '.env.test') });

const prismaBin = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'node_modules',
  '.bin',
  'prisma',
);

if (!fs.existsSync(prismaBin)) {
  console.error(`Prisma CLI not found at ${prismaBin}`);
  process.exit(1);
}

const result = spawnSync(
  process.platform === 'win32' ? 'cmd.exe' : prismaBin,
  process.platform === 'win32'
    ? ['/d', '/s', '/c', `${prismaBin}.cmd migrate dev --name init`]
    : ['migrate', 'dev', '--name', 'init'],
  {
    stdio: 'inherit',
    env: process.env,
  },
);

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
