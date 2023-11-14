// userService/app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello from userService!');
});

app.listen(port, () => {
console.log(`userService listening at http://localhost:${port}`);
});
