// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample users data
const users = [
  { id: 1, username: 'user1@gmail.com', password: 'password1' },
  { id: 2, username: 'user2@gmail.com', password: 'password2' },
];

// Signup endpoint
app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Please provide both username and password.' });
  }

  const existingUser = users.find((user) => user.username === username);

  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Username already exists. Please choose a different one.' });
  }

  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  return res.status(201).json({ success: true, message: 'User signed up successfully!' });
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Please provide both username and password.' });
  }

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ success: true, message: 'Login successful!' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid username or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
