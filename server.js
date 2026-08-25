import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const publicDir = path.join(__dirname, 'public');

// Serve static assets from public directory
app.use(express.static(publicDir));

// Route handlers for clean paths
app.get('/budget', (req, res) => {
  res.sendFile(path.join(publicDir, 'budget.html'));
});

app.get('/delivery', (req, res) => {
  res.sendFile(path.join(publicDir, 'delivery.html'));
});

// SPA / fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Ecoénergie CRM server running on http://0.0.0.0:${PORT}`);
});
