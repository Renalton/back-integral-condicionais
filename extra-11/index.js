//Valor da parcela do Sucesso Compartilhado - código para verificar quantos o aluno vai pagar por mês caso se encaixe no perfil abaixo  

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 50;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1700000;

if (rendaMensalEmCentavos >= 200000) {
    if(mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000 ){
        console.log(`O aluno vai pagar uma taxa de  R$ ${(rendaMensalEmCentavos * 0.18) /100} reais  por ${60 - mesesDecorridos} mês(es)`);
    }else if(totalJaPagoPeloAluno === 1800000){
        console.log(`O aluno não deve pagar mais nada, pois já quitou a dívida`);
    }
}else if(mesesDecorridos > 60){
    console.log(`O valor da parcela é de R$0,00 reais pois já passaram os ${mesesDecorridos} meses corridos `);
}else{
    console.log(`O valor da parcela é de R$0,00 reais pois a renda do aluno é menor que o valor mínimo`);
}

