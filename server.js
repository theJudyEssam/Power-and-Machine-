//this is will be the main file responsible for the server rendering
import express from "express"
import S_Router from "./routers/solve.js"
import dotenv from "dotenv"
import { marked } from "marked"
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express();

app.use('/scripts', express.static('public/scripts'));
app.use('/styles', express.static('public/styles'));
app.use('/displays', express.static('public/displays'));


app.get("/", (req, res)=>{
    res.render("main-page.ejs")
})


app.get("/machine/:machine", (req, res)=>{
    const machine = req.params.machine;
    const filePath = path.join(__dirname, 'markdown', `${machine}.md`);


    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){return res.status(404).send("Machine not here")}

        const sections = {};
        const lines = data.split('\n');
        let currentSection = null;

        lines.forEach((line)=>{
            if(line.startsWith('##')){
                currentSection = line.replace('##', '').trim();
                sections[currentSection] ='';
            }
            else if(currentSection){
                sections[currentSection] += line + '\n';
            }
        })
        
        res.render("machine.ejs",{ machine, sections, marked})
    })
})


//the routers
app.use("/solve", S_Router);


app.listen(process.env.PORT);



