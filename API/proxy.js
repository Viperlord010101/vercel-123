import unblocker from 'unblocker';
import { createServer } from 'http';

const unblockerMiddleware = unblocker({ prefix: '/api/proxy/' });

export default function handler(req, res) {
  // Vercel uses req, res as in Node.js
  unblockerMiddleware(req, res, () => {
    res.statusCode = 404;
    res.end('Not found');
  });
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
