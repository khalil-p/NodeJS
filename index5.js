import express from "express";

const app = express();

// parse /access body data
app.use(express.json())



const port = 8000;

// app.use("/",(req,res)=>{
// res.send("hello");

// })

// use is for middleware

// routing
// app.get()
// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {
  // console.log({req});
  console.log("home");

  res.send("hello");
});

app.get("/product/:id", (req, res) => {
  res.send("product");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
