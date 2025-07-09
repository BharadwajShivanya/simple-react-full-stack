const express = require('express');
const path = require('path');

const app = express();

// Serve static files from dist folder (React build)
app.use(express.static('dist'));

// API route — use 'Staging' if it's staging app
app.get('/api/getUsername', (req, res) => {
  res.send({ username: 'Staging' }); // or 'Production' in prod
});

// ✅ Catch-all route for React (must be last!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
