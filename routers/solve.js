import express from "express"
import bodyParser from "body-parser"
import { create, all } from 'mathjs'
import { polartoRectangular, rectangularToPolar } from "../middleware/Polar.js"
const math = create(all)



const S_Router = express.Router();
S_Router.use(bodyParser.urlencoded({ extended: true }));

//transformer function, take in the inputs and solve 
S_Router.post("/transformer/efficiency", (req, res)=>{

    //inputs
    const R1 = req.body["R1"];
    let R2 = req.body["R2"];
    const X1 = req.body["X1"];
    let X2 = req.body["X2"];
    const Rc = req.body["Rc"];
    const Xm = req.body["Xm"];
    const a = req.body["a"]
    let V2 = req.body["V2"]
    const Pout = req.body["Pout"]
    const PF = req.body["PF"]

    //getting vals for the approx circuit
    R2 = (a*a)* R2;
    X2 = (a*a)* X2;
    V2 = a * V2;
    const S = Pout / PF;
    

    //DISCLAIMER:  the phase angles are all in radians

    const I2_mag = S / V2;
    const I2_angle = -Math.acos(0.8);
    let I2_complex_obj= polartoRectangular(I2_mag, I2_angle);
    let I2_complex = math.complex(I2_complex_obj.real, I2_complex_obj.imag); //used in calculations
    let I2_polar = rectangularToPolar(I2_complex.re, I2_complex.im)

    // console.log(`I2_mag: ${I2_mag} \n I2_angle: ${I2_angle}`)
    // console.log(I2_complex);
    // console.log(I2_polar);

    const Z1 = math.complex(R1, X1)
    const Z2 = math.complex(R2, X2)

    const V1_complex = math.add(V2, math.multiply(I2_complex,math.add(Z1, Z2) ));
 
    const V1_polar = rectangularToPolar(V1_complex.re, V1_complex.im);
    console.log(`V1_mag = ${V1_polar.magnitude} V1_angle = ${V1_polar.phaseAngle * (180 / Math.PI)}`)


    // const I2_polar = math.complex(I2_complex).toPolar();
    // const V1_polar = math.complex(V1).toPolar();

    // console.log(` X1 is ${X1} \n R1 is ${R1} \n X2 is ${X2} \n R2 is ${R2}`)
    // console.log(I2_polar)
    // console.log(V1_polar);
    res.sendStatus(200)
    

})


export default S_Router