// const express = require('express');
// const os = require('os');

// const app = express();

// app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const express = require('express');

const app = express();

// Serve static files from dist folder (React build)
app.use(express.static('dist'));

// Working API route — hardcoded username (os.userInfo won't work on Railway)
app.get('/api/getUsername', (req, res) => {
  res.send({ username: 'Production' });
});

// Start the server on the given port (for Railway)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
