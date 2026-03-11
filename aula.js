const carros = [
    "Fiat Argo 1.0",
    "Volkswagen Polo TSI",
    "Chevrolet Onix Plus",
    "Hyundai HB20 Sense",
    "Toyota Corolla XEi",
    "Honda Civic EXL",
    "Jeep Renegade Longitude",
    "Ford Ranger XLS 4x4"
];

const precos = [
    87900,
    115900,
    98900,
    92900,
    159900,
    179900,
    139900,
    289900
];

function mostrarEstoque() {
    console.log("       CONCESSIONÁRIA - ESTOQUE      ");
    console.log("Nº - Modelo do Carro - Preço - ");
    for (let i = 0; i < carros.length; i++) {
        const numero = (i + 1).toString().padStart(2, ' ');
        const modelo = carros[i].padEnd(28);
        const precoFormatado = "R$ " + precos[i].toLocaleString('pt-BR');
        console.log(`${numero}  | ${modelo} | ${precoFormatado}`);
    }
    

}

function adicionarCarro(nomeNovo, precoNovo) {
    carros.push(nomeNovo);
    precos.push(precoNovo);
    console.log(`Novo carro adicionado ao estoque: ${nomeNovo} - R$ ${precoNovo.toLocaleString('pt-BR')}`);

}

function removerCarro(indice) {
    const indiceReal = indice;

    if (indiceReal < 0 || indiceReal >= carros.length) {
        console.log("Índice inválido! Verifique o número do carro.");
   
        return;
    }

    const carroRemovido = carros[indiceReal];
    carros.splice(indiceReal, 1);
    precos.splice(indiceReal, 1);

    console.log(`Carro removido do estoque: ${carroRemovido}`);

}

console.log("CONCESSIONÁRIA ABERTA!");

// 1. Mostra o estoque inicial
mostrarEstoque();

// 2. Adiciona um novo carro
adicionarCarro("Nissan Kicks Sense", 124900);

// 3. Mostra o estoque novamente (agora com 9 carros)
mostrarEstoque();

// 4. Remove um carro (exemplo: índice 3 → Hyundai HB20 Sense)
removerCarro(3);

// 5. Mostra o estoque final
mostrarEstoque();
