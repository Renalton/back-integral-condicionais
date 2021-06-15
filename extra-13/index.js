//tipo de pagamento (dinheiro, credito, debito, cheque) e o desconto oferecido por cada categoria.
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    console.log(`O desconto é de 5% e o valor a ser pago é R$${((valorDoProduto - ( valorDoProduto * 0.05) ) /100).toFixed(2) } com desconto`);
} else if (tipoDePagamento === "cheque") {
    console.log(`O desconto é de 3% e o valor a ser pago é R$${((valorDoProduto - ( valorDoProduto * 0.0) ) /100).toFixed(2)} com desconto`);
} else {
    console.log(`O desconto é de 10% e o valor a ser pago é R$${((valorDoProduto - ( valorDoProduto * 0.10) ) /100).toFixed(2)} com desconto`);
}