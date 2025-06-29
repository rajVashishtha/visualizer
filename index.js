const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

// Route: Home
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// Route: Sort Page
app.get('/sort', (req, res) => {
  res.sendFile('index_sort.html', { root: __dirname });
});

// Route: Search Page
app.get('/search', (req, res) => {
  res.sendFile('index_search.html', { root: __dirname });
});

// Only listen when running locally (not on Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server running on port ${PORT}`);
  });
}

// Export for Vercel (as serverless function)
module.exports = app;
module.exports.handler = serverless(app);
