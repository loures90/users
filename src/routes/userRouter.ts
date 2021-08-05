import express from "express";
import { userController } from "../controller/user";

export const userRouter = express.Router();

userRouter.post("/", userController.create);
userRouter.patch("/:id", userController.update);
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUser);
userRouter.delete("/:id", userController.deleteUser);