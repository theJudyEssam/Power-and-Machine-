//this is will be the main file responsible for the server rendering
import express from "express"
import S_Router from "./routers/solve.js"
import dotenv from "dotenv"

dotenv.config()
const app = express();
app.use('/scripts', express.static('public/scripts'));
app.use('/styles', express.static('public/styles'));
app.use('/displays', express.static('public/displays'));


app.get("/", (req, res)=>{
    res.render("main-page.ejs")
})

app.get("/machine", (req, res)=>{
    res.render("machine.ejs")
})


app.use("/solve", S_Router);

app.listen(process.env.PORT);



