const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => { //get endpoint
    res.send({'message': 'Hello World!'});
});

app.get('/:name', (req, res) => { //get endpoint
    const name = req.params.name;
    res.json({'message': `Hello ${name}!`});
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

