const express = require("express");
const app = express();
const port = 3000;
const DIRNAME = __dirname;


app.get("/", (req, res) => {
    res.status(200).sendFile(DIRNAME + '/index.html');
});

app.get('*', function (req, res) {
    res.status(404).sendFile(DIRNAME + '/404.html');
});



app.listen(port, () => {
    console.log(`Rodando na porta ${port}...!`);
});