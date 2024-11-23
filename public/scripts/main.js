//import { response } from "express";

console.log("I am in main!")
//console.log(document.getElementById("PF"));

document.getElementById("calculator-btn").addEventListener("click",  (event)=>{
  event.preventDefault(); 
  console.log("I am clicked.")
  const data = {
    R1: parseFloat(document.getElementById("R1").value) || 0,
    R2: parseFloat(document.getElementById("R2").value) || 0,
    X1: parseFloat(document.getElementById("X1").value) || 0,
    X2: parseFloat(document.getElementById("X2").value) || 0,
    Rc: parseFloat(document.getElementById("Rc").value) || 0,
    Xm: parseFloat(document.getElementById("Xm").value) || 0,
    a: parseFloat(document.getElementById("a").value) || 0,
    V2: parseFloat(document.getElementById("V2").value) || 0,
    Pout: parseFloat(document.getElementById("Pout").value) || 0,
    PF: parseFloat(document.getElementById("PF").value) || 0
};

      Object.keys(data).forEach(key => {
        if (data[key] === undefined) {
          console.error(`Invalid value for ${key}:`, data[key]);
        }
      });

     // console.log(`data is: ${JSON.stringify(data)}`)



      fetch("http://localhost:3000/solve/transformer/efficiency", {
        method: "POST", 
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
      })
      .then(response =>{
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
          return response.json();})
      .then(result=>{
        console.log(`the result is ${result}`)
        document.getElementById("results").innerHTML = `
        <p>Efficiency: ${result.efficiency.toFixed(2)}%</p>
        <p>Voltage Regulation: ${result.VR.toFixed(2)}%</p>
      `;
      })
      .catch(error => {
        console.error("Error:", error);
        alert("There was an error processing your request.");
      });
})
