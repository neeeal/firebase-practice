const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    const {name} = req.body;

    res.status(200).send(`Welcome ${name}`);
})

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`Server listening on ${PORT}`);
    } else {
        console.error('Error starting server', error);
    }
})