//Valor da parcela do Sucesso Compartilhado - código para verificar quantos o aluno vai pagar por mês caso se encaixe no perfil abaixo  

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;

if (rendaMensalEmCentavos >= 200000) {
    if(mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000 ){
        console.log(`O aluno vai pagar uma taxa de  R$ ${(rendaMensalEmCentavos * 0.18) /100} reais  por ${60 - mesesDecorridos} mês(es)`);
    }else if(totalJaPagoPeloAluno === 1800000){
        console.log(`O aluno não deve pagar mais nada, pois já quitou a dívida`);
    }
}

