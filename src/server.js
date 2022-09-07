const express = require('express');
const path = require('node:path');
const app = express();
const port = process.env.PORT || 8080;
const enforce = require('express-sslify');

app.use(express.static(path.join(__dirname, '/../build')));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build', 'index.html'));
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/../build/service-worker.js'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
