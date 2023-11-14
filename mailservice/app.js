// emailService/app.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
res.send('Hello from emailService!');
});

app.listen(port, () => {
console.log(`emailService listening at http://localhost:${port}`);
});
