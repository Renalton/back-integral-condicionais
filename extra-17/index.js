//Número de parcelas restante - esse código calcula o número de parcelas restante com base no valor do produto e no número de parcelas
//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

console.log(`Fernanda já pagou R$${valorPago} de R$${(valorDoProduto/100).toFixed(2)} parcelado em ${quantidadeDoParcelamento} vezes restando ${((((valorDoProduto /100) - valorPago) * quantidadeDoParcelamento)/(valorDoProduto /100) )} parcelas de R$${(valorDoProduto/100) /10}`)