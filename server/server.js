const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

// app.use('/', express.static('public'));
app.use(cors())

const budget = [];

// app.get('/hello', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/budget', (req, res) => {

    // Read the data of the budget.json file
    fs.readFile('budget.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading budget.json file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Parse the JSON data
        const budgetData = JSON.parse(data);
        console.log(budgetData);
        res.json(budgetData);
    });
    console.log(res);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});