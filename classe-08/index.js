//Montanha Russa Muito Assustadora - verifica se uma pessoa pode acessar a montanha russa
const idade = 12;
const possuiPatologia = false;
const altura = 140;
const ehEstudante = false;

if(altura >= 150 || possuiPatologia != true){
    if(idade >=12 && idade < 65 ){
          if(ehEstudante != false || idade < 18){
                console.log("Paga 10 reais");
            }else{
                console.log("Paga 20 reais");
            }
        }else{
        console.log("Acesso negado!");
    }
}else{
    console.log("Acesso negado!");
}