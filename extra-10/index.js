//Identificando caracteres - código para identificar se um determinado caracter é uma consoante, vogal ou número e se for uma letra se é maiúscula ou minúscula

const caractere = "O";


if ((caractere.charCodeAt(0) >= 65 && caractere.charCodeAt(0) <= 90) || (caractere.charCodeAt(0) >= 97 && 
        caractere.charCodeAt(0) <= 122)){
    if(caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U"){
        console.log(`O caractere \" ${caractere} \"é uma vogal maiúscula`);
        
    }else if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u"){
        console.log(`O caractere \" ${caractere} \" é uma vogal minúscula`);
    }else if(caractere.charCodeAt(0) >= 65 && caractere.charCodeAt(0) <= 90){
        console.log(`o caractere \" ${caractere} \" é uma consoate maiúscula`);
    }else{
        console.log(`o caractere \" ${caractere} \" é uma consoate minúscula`);

    }
}else if(caractere.charCodeAt(0) >= 48 && caractere.charCodeAt(0) <= 57 ){
    console.log(`O caracter \" ${caractere} \" é um número`);   
}else{
    console.log(`O caracter \" ${caractere } \" não é uma consoante, vogal ou número`);
}

//if(caractere)
