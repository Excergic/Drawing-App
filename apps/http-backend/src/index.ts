import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config";
import { middleware } from "./middlewar";

const app = express();

app.use(express.json());


app.post('/signup', (req, res) => {
    //zod validation for signup
})

app.post("/login", (req, res) => {
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);
    
    res.json({ token });
})


app.post("/create-room", middleware, (req, res) => {
    //db call

    res.json({
        roomId : 123
    });

})

app.listen(3001);