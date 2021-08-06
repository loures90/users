import mongoose from "mongoose";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import cors from 'cors';
import path from'path';
import cookieParser from 'cookie-parser';
import { userRouter } from "./routes/userRouter";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors());

app.use("/users", userRouter);

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});


mongoose.connect('mongodb://localhost:27017/users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log("MongoDB connected")
    }
})
