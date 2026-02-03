import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Serve static files in production (from Vite build)
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');

  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});
