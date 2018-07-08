const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res)=> {
    const customers = [
        { 
            id: 1,
            firstName: 'Node',
            lastName: 'Rockstar',
        },
        {
            id: 2,
            firstName: 'JS',
            lastName: 'Killer',
        },
        {
            id: 3,
            firstName: 'Python',
            lastName: 'Bot',
        },
        {
            id: 4,
            firstName: 'PHP',
            lastName: 'Oldman',
        },
    ]
    res.send(customers);
});

app.listen(port, () => console.log(`Sever Started on ${port}`));
