//Nome para exibição - nesse exercício aplicamos o conceito de "truthiness" para exebir o nome, sobrenome ou apelido do usuário

const primeiroNome = "Mario";
const sobrenome = ""; //Bros
const apelido = ""; //Luigi

if((apelido)){
    console.log(apelido);
}else if(sobrenome){
    console.log(primeiroNome + sobrenome);
}else{
    console.log(primeiroNome);
}
