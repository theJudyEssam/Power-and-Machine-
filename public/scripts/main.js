//import { response } from "express";

console.log("I am in main!")

document.getElementById("calculator-btn").addEventListener("click", ()=>{
    const data = {
        R1: parseFloat(document.getElementById("R1").value),
        R2: parseFloat(document.getElementById("R2").value),
        X1: parseFloat(document.getElementById("X1").value),
        X2: parseFloat(document.getElementById("X2").value),
        Rc: parseFloat(document.getElementById("Rc").value),
        Xm: parseFloat(document.getElementById("Xm").value),
        a: parseFloat(document.getElementById("a").value),
        V2: parseFloat(document.getElementById("V2").value),
        Pout: parseFloat(document.getElementById("Pout").value),
        PF: parseFloat(document.getElementById("PF").value)
      };

      fetch("http://localhost:3000/solve/transformer/efficiency", {
        method: "POST", 
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(data)
      }).then(response => response.json())
      .then(result=>{
        console.log(result)
        document.getElementById("results").innerHTML = `
        <p>Efficiency: ${result.efficiency.toFixed(2)}%</p>
       
      `;
      })
      .catch(error => {
        console.error("Error:", error);
        alert("There was an error processing your request.");
      });
})