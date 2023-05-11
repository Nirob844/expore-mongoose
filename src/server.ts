const express = require('express');
const mongoose = require('mongoose');
const app = express()
const port = 5000


// database connection
//bootstrap().catch(err => console.log(err));

async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(`database connection successful`);
    } catch (error) {
        console.log(error);

    }

}

bootstrap()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})