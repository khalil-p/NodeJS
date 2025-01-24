import express from "express";
import fs from "fs";
const app = express();

const port = "8000";

app.use("/", (req, res) => {
    // res.setHeader("Content-Type","application/json")
    // res.statusCode=400
    // res.set('Content-Type', 'application/json');
    // res.send('<h1>Hello, HTML!</h1>');
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify({ message: 'Hello, JSON!' }));
});
// app.use("/", (req, res) => {
//   const data = fs.readFileSync("./src/about.html").toString();
//   res.send(data);
// });

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
