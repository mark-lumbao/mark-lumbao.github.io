/* eslint-disable no-console */
import { join } from 'path';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';

const app = express();
const publicDirectory = join(process.cwd(), '/dist');
const port = process.env.PORT || 3333;

app.use(
  expressStaticGzip(publicDirectory, {
  }),
);

app.get('*', (_req, res) => {
  res.sendFile(join(process.cwd(), '/dist/index.html'));
});

app.listen(port, () => console.log(`Server is now running on port ${port}`));
