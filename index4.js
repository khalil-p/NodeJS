import express from "express";
import fs from "fs";
import path from "path"
import { fileURLToPath } from "url";
const app = express();

const port = "8000";

app.use("/", (req, res, next) => {
  console.log("I am middleware...");
  // res.send("hello")
  next();
});

app.use("/create", (req, res, next) => {
  console.log("I am create middleware");
  next();
});

const middleware = (req, res, next) => {
  const isAdmin = true;
  if (!isAdmin) {
    console.log("loged in..");
    next();
  } else {
    res.send("Not authorised");
  }
};
app.use("/login", middleware);

// dirname in es module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// app.use(express.static("src/public"))
app.use("/contact",(req,res,next)=>{
res.status(200);
res.setHeader("Content-Type","text/html");
// we'll see this with ejs only
res.sendFile(path.join(__dirname,"src/public","contact.html"))
})

// 404 not found page
app.use("/**",((req,res)=>{

}))

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
