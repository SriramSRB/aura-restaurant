const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'AURA Restaurant.html'));
});

app.listen(PORT, () => {
    console.log(`AURA server is running on http://localhost:${PORT}`);
});