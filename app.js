const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first server.');
});
app.get('/api/greeting', (req, res) => 
	{ const name = req.query.name || 'World'; 
	res.json({ greeting: `Hello, ${name}!` });
});
app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: 'public' });
});

app.get('/contact', (req, res) => {
  res.sendFile('contact.html', { root: 'public' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} <${email}>: ${message}`);
  res.send(`<p>Thanks ${name}, your message was received! <a href="/">Go home</a></p>`);
});

