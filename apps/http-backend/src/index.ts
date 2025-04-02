import express from "express";
import { jwt } from "jsonwebtoken";
const JWT_SECRET = "djklashdajklsh12e4235"; 
const app = express();

app.use(express.json());


app.post('/signup', (req, res) => {
    const {username, email, password } = req.body;
    if(!email || !username) {
        res.status(401).json({message : "User not found!"});
    }

    const newUser = await new User.findOne({email, username}){
        username,
        email,
        password
    }

    await newUser.save();
    res.json({
        message : "you are signUp!"
    });
})

app.post("/login", (req, res) => {
    const { username, email, password } = req.body;
    if(!email || !username || !password.password){
        res.status(400).json({message : "Invalid Credentials!"});
    }
})

//middleware to gate the create-room
app.get("/", (req, res, next) => {

    next();
})

app.post("/create-room", (req, res) => {

})

app.listen(3001);