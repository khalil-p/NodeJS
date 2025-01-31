import express from "express";
import { createUser, getUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.get("/", getUser);
userRouter.put('/:id',updateUser)

export default userRouter;
