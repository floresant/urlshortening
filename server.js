import express from "express";


const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}.`)
})


app.get("/", (req, res) => {
    res.send("Welcome to the page!");
})
