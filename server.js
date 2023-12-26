// server.js
const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve static files, including CSS
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the "orb" page
app.get('/orb', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'orb.html'));
});

// Define a route for the CSS file
app.get('/button.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'button.css'), {
    headers: {
      'Content-Type': 'text/css', // Set the correct MIME type for CSS
    },
  });
});

app.get('/orb.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.css'), {
    headers: {
      'Content-Type': 'text/css', // Set the correct MIME type for CSS
    },
  });
});

app.get('/orb.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'orb.js'), {
    headers: {
      'Content-Type': 'application/javascript', // Set the correct MIME type for JavaScript
    },
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
