import express from "express";
import userRouter from "./routes/userRoutes.js";

const app = express();

// parse /access body data
app.use(express.json());

const port = 8000;

app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});
