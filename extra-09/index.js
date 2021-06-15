//Transformar nota em conceito - código para converter a nota do padrão numeral para literal
const nota = 5;

if(nota > 4){
    if(nota >= 9 ){
        console.log("O estudante obteve conceito A");
    }else if(nota < 9 && nota >= 8){
        console.log("O estudante obteve conceito B");
    }else if(nota < 8 && nota >= 6){
        console.log("O estudante obteve conceito C");
    }else if(nota < 6 && nota >= 4){
        console.log("O estudante obteve conceito D");
    }

}else{
    console.log("O estudante obteve conceito E");
}