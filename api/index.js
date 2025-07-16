const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '..', 'static')));

// Routes
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '..', 'static') });
});

app.get('/sort', (req, res) => {
  res.sendFile('index_sort.html', { root: path.join(__dirname, '..', 'static') });
});

app.get('/search', (req, res) => {
  res.sendFile('index_search.html', { root: path.join(__dirname, '..', 'static') });
});

// Local dev
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
