//Isenção de impostos - código para verificar se uma pessoal é insenta do IR
const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 3000000; //emCentavos

if(totalDeRendimentos > 2855970){
    if(aposentada != false || portadoraDeDoenca != false){
        console.log("Pega Leão!");
    }else{
        console.log("Vaza Leão! Já tá difícil sem você");
    }
}else{
    console.log("Vaza Leão!5 Já tá difícil sem você");
}
