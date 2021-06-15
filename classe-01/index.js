//Pedra, papel ou tesoura
const jogada1 = "papel"
const jogada2 = "tesoura"

if(jogada1 !== jogada2){
    
    if(jogada1 === "pedra" && jogada2 === "tesoura"){
        console.log("Pedra");
    }else if(jogada1 ==="papel" && jogada2 ==="pedra"){
        console.log("Papel");
    }else if(jogada1 === "tesoura" && jogada2 === "papel"){
        console.log("Tesoura");
    }else if(jogada1 ==="papel" && jogada2 ==="tesoura"){
        console.log("Tesoura");
    }else if(jogada1 === "tesoura" && jogada2 ==="pedra"){
        console.log("Pedra");
    }else if(jogada1 ==="pedra" && jogada2 ==="papel"){
        console.log("Papel");
    }
}else{
    console.log("Empate");
}
