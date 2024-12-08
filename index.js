//this is will be the main file responsible for the server rendering
import express from "express"
import S_Router from "./routers/solve.js"
import dotenv from "dotenv"
import { marked } from "marked"
import fs from "fs"
import path from "path"
import axios from "axios"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express();
const port = process.env.PORT || 5000

app.use('/scripts', express.static('public/scripts'));
app.use('/styles', express.static('public/styles'));
app.use('/displays', express.static('public/displays'));


const machines = [
    {
      name: "transformer",
      description: "A device that transfers electrical energy between circuits using electromagnetic induction, commonly used to step up or step down voltage levels.",
      png_path: "/displays/Transformer.png"
    },
    {
      name: "DC Motor",
      description: "An electric motor that converts direct current (DC) electrical energy into mechanical energy, widely used in industries and automation systems.",
      png_path: "/displays/DC-Motor.png"
    },
    {
      name: "DC Generator",
      description: "A machine that converts mechanical energy into direct current (DC) electrical energy, often used in power generation and battery charging.",
      png_path: "/displays/DC-Generator.png"
    },
    {
      name: "Alternator",
      description: "A generator that produces alternating current (AC), commonly found in vehicles to charge the battery and power electrical systems.",
      png_path: "/displays/alternator.png"
    }
  ];
  

app.get("/", (req, res)=>{
    //const machines  = ["transformer", "DC motor", "DC generator", "Alternator"]
    console.log(machines[1])
    res.render("index.ejs",{ machines})
})



app.get("/machine/:machine", (req, res)=>{
    const machine = req.params.machine;
    const filePath = path.join(__dirname, 'public', 'markdown', `${machine}.md`);



    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){return res.render("notfound.ejs")}

        const sections = {};
        
        const lines = data.split('\n');
        let currentSection = null;

        lines.forEach((line)=>{
            if(line.startsWith('## ')){
                currentSection = line.replace('##', '').trim();
                sections[currentSection] ='';
            }
            else if(currentSection){
                sections[currentSection] += line + '\n';
            }
        })
        
      //  console.log(typeof(sections["Inputs"]))
       // console.log(sections["Inputs"])
        let inp_array = sections["Inputs"].split(" ").filter(Boolean); 
        let inp_units = sections["Units"].split(" ").filter(Boolean);
        console.log(inp_array);

        res.render("machine.ejs",{ machine, sections, marked, inp_array, inp_units})
    })
})


//the routers
app.use("/solve", S_Router);


export default app;



