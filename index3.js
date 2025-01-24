import http from "http";
import fs from "fs";
// console.log(http);

const ip = "127.0.0.1";
const port = "5000";
const server = http.createServer((req, res) => {
    // console.log({req});
    // console.log({res});
  if ((req.method == "GET", req.url == "/")) {
    const data = fs.readFileSync("./src/home.html").toString();
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(data);
    res.end();
  }else if (req.method == "GET",req.url == "/about") {
    const data = fs.readFileSync('./src/about.html').toString();
    res.write(data)
    res.end()
  }else{
    res.statusCode=404
    res.write("404, Page not found")
    res.end()
  }

  //   res.statusCode = 200;
  //   res.setHeader('Content-Type',"application/json")
  // // res.set({
  // //     'Content-Type':"application/json",
  // //     "Custom-Header":"MyHeaderValue"
  // // })

  // res.writeHead(200,{'Content-Type':"application/json"})
  //   res.write("<h1>hello<h1/>");
  //   res.end();
});

server.listen(port, ip, () => {
  console.log(`server listing at http://${ip}:${port}`);
});
