const express = require('express');
const app = express();
const Routes = require("./router/router")
const port = process.env.PORT || 3000;


app.use("/", Routes)


app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
