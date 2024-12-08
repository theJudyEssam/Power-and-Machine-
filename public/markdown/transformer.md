
## Description

An electrical transformer is a static electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It is commonly used to increase (step-up) or decrease (step-down) the voltage levels in power systems while maintaining the power balance. Transformers play a vital role in modern electrical distribution systems.

## Theory of Operation
The transformer operates on the principle of Faraday's Law of Electromagnetic Induction, which states that a changing magnetic flux induces an electromotive force (EMF) in a conductor. A transformer consists of two or more windings (primary and secondary) wound around a magnetic core.

When an alternating current flows through the primary winding, it generates a time-varying magnetic field.

This magnetic field induces a voltage in the secondary winding proportional to the turns ratio of the transformer.

The voltage ratio between primary and secondary windings depends on the ratio of the number of turns in each winding




## Applications
Transformers have a wide range of applications in various domains, including:

- 1- **Power grids**: For stepping up the voltage for long-distance transmission and stepping it down for distribution to homes and industries.
- 2- **Industrial plants**: Used to operate machinery requiring specific voltage levels.
- 3- **Renewable energy systems**: Transformers are essential in solar farms and wind power plants for integrating generated electricity into the grid.
- 4- **Electronic devices**: Small transformers are used in chargers and adapters.
- 5- **Isolation**: To separate one part of a circuit from another for safety or performance reasons.

## Construction 
-  1- **Stator (Magnetic Core)**: The core is typically made of thin laminated sheets of silicon steel to minimize eddy current losses. It serves as the medium for the magnetic flux path and supports the windings.

- 2- **Rotor (Windings)**: Primary Windings: Connected to the input voltage source. Made of copper or aluminum for good electrical conductivity.
Secondary Windings: Connected to the load. The voltage induced depends on the turns ratio relative to the primary winding.
- 3- **Field Windings**: Used in certain transformer types to regulate voltage output or provide excitation.

- 4- **Coils**: The windings are often divided into layers or disks to reduce voltage stress between turns. Insulated materials are used between layers for safety.

- 5- **Insulation and Cooling Systems**: Transformers use insulation to prevent short circuits and systems such as oil-based cooling or air cooling to dissipate heat generated during operation.

## Inputs
X1 X2 R1 R2 Rc Xm a V2 Pout PF  .

## Units

Ohms Ohms Ohms Ohms Ohms Ohms . Volts Watt . .


## Inputs_Details

- **V1** = primary terminal voltage
- **V2** = secondary terminal, voltage
- **I1** = primary current
- **I2** = Secondary current
- **Ie** = excitation current
- **Im, Lm1** = magnetizing current and reactance
- **Ic, Rc1** = current and resistance representing core loss
- **R1** = resistance of the primary winding
- **R2** = resistance of the secondary winding
- **X1** = primary leakage reactance
- **X2** = secondary leakage reactance
- **Pout** = Output Power



## Transformer Efficiency Calculator


This calculator computes the **efficiency** and **voltage regulation (VR)** of a transformer based on user-provided input parameters.


***Step 1: Calculate Load Current (I2)***

The load current magnitude (\( |I_2| \)):

![I2](https://latex.codecogs.com/png.latex?%7CI_2%7C%20%3D%20%5Cfrac%7BS%7D%7BV_2%7D)

The phase angle of \( I_2 \):

![Angle](https://latex.codecogs.com/png.latex?%5Ctext%7BAngle%20of%20%7D%20I_2%20%3D%20-%5Ccos%5E%7B-1%7D%28PF%29)

---

***Step 2: Calculate Primary Voltage (V1)***
The primary voltage (\( V_1 \)):

![V1](https://latex.codecogs.com/png.latex?V_1%20%3D%20V_2%20%2B%20I_2%20%5Ccdot%20%28Z_1%20%2B%20Z_2%29)

Where:
- \( Z_1 = R_1 + jX_1 \): Primary impedance.
- \( Z_2 = R_2 + jX_2 \): Referred secondary impedance.

---

***Step 3: Calculate Efficiency***
Efficiency (\( \eta \)):

![Efficiency](https://latex.codecogs.com/png.latex?%5Ceta%20%3D%20%5Cleft%28%5Cfrac%7BP_%7Bout%7D%7D%7BP_%7Bin%7D%7D%5Cright%29%20%5Ctimes%20100)

---

***Step 4: Calculate Voltage Regulation (VR)***
Voltage Regulation:

![VR](https://latex.codecogs.com/png.latex?VR%20%3D%20%5Cfrac%7BV_1%20-%20V_2%7D%7BV_2%7D%20%5Ctimes%20100)



This calculator simplifies complex electrical calculations and provides results essential for evaluating transformer performance.
