//Peneira de Vôlei - processo seletivo para novos jogadores e suas classificações
const alturaEmCm = 179;


if(alturaEmCm >= 180){
    if(alturaEmCm >=180 && alturaEmCm <= 185){
        console.log("Líbero");
    }else if(alturaEmCm >185 && alturaEmCm <= 195){
        console.log("Ponteiro");
    }else if(alturaEmCm > 195 && alturaEmCm <= 205){
        console.log("Oposto");
    }else if(alturaEmCm > 205){
        console.log("Central");
    }
}else{
    console.log("REPROVADO");
}
