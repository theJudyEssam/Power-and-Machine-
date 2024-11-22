

function polartoRectangular(magnitude, phase){
    const realPart = magnitude * Math.cos(phase);
    const imagPart = magnitude * Math.sin(phase);
    
    return { real: realPart, imag: imagPart };
}

function rectangularToPolar(real, imag) {
    
    const magnitude = Math.sqrt(real * real + imag * imag);
    const phaseAngle = Math.atan2(imag, real);

    return { magnitude: magnitude, phaseAngle: phaseAngle };
}


export {rectangularToPolar, polartoRectangular};