import express from "express"
import bodyParser from "body-parser"
import { create, all } from 'mathjs'
import { polartoRectangular, rectangularToPolar } from "../middleware/Polar.js"
const math = create(all)



const S_Router = express.Router();
S_Router.use(bodyParser.urlencoded({ extended: true }));
S_Router.use(bodyParser.json());

//transformer function, take in the inputs and solve 
S_Router.post("/transformer/efficiency", (req, res)=>{


    try {
          //inputs
    // const R1 = req.body["R1"];
    // let R2 = req.body["R2"];
    // const X1 = req.body["X1"];
    // let X2 = req.body["X2"];
    // const Rc = req.body["Rc"];
    // const Xm = req.body["Xm"];
    // const a = req.body["a"]
    // let V2 = req.body["V2"]
    // const Pout = req.body["Pout"]
    // const PF = req.body["PF"]

    let { R1, R2, X1, X2, Rc, Xm, a, V2, Pout, PF } = req.body;


    console.log(R1)
    console.log(R2)
    
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
   // console.log(`V1_mag = ${V1_polar.magnitude} V1_angle = ${V1_polar.phaseAngle * (180 / Math.PI)}`)

    const VR =( (V1_polar.magnitude - V2) / V2) *100;
    console.log(VR);

    const req1 = Z2.re + Z1.re; //8
    const Rc_complex = math.complex(Rc, 0);
    console.log(Rc_complex);
    const Ic = math.divide(V1_complex , Rc_complex); //complex num
    const Ic_polar = rectangularToPolar(Ic.re, Ic.im);

    console.log(Pout);
    console.log(Ic_polar.magnitude);
    console.log(Rc);
    console.log(req1);

    const part1 = Ic_polar.magnitude*Ic_polar.magnitude * Rc ;
    console.log(part1);

    const part2 = parseInt(25*req1, 10);
    console.log(part2);
    const Pin = parseInt(Pout) + part1 + part2;
    console.log(Pin)
    const eff =( (Pout) / Pin) * 100

    console.log(eff)
    res.status(200).json({
        efficiency: eff,
    });
  
      } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    

})


export default S_Router