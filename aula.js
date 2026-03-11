/*
Imagine que você abriu uma loja:
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/

// 1) Lista com 8 carros (produtos)
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

// 2) Lista com os preços correspondentes em reais
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

// 3) Função que mostra o estoque da concessionária
function mostrarEstoque() {

    console.log("       CONCESSIONÁRIA - ESTOQUE      ");

    console.log("Nº  | Modelo do Carro              | Preço        ");
    for (let i = 0; i < carros.length; i++) {
        const numero = (i + 1).toString().padStart(2, ' ');
        const modelo = carros[i].padEnd(28);
        const precoFormatado = "R$ " + precos[i].toLocaleString('pt-BR');
        console.log(`${numero}  | ${modelo} | ${precoFormatado}`);
    }
    
}

// 4) Função que adiciona um novo carro e seu preço
function adicionarCarro(nomeNovo, precoNovo) {
    carros.push(nomeNovo);
    precos.push(precoNovo);
    console.log(`Novo carro adicionado ao estoque: ${nomeNovo} - R$ ${precoNovo.toLocaleString('pt-BR')}`);
}

// 5) Função que remove um carro pelo índice
function removerCarro(indice) {
    // Índice começa em 0, mas o usuário pode pensar em 1-based
    const indiceReal = indice; // se quiser ajustar para 1-based: indice - 1

    if (indiceReal < 0 || indiceReal >= carros.length) {
        console.log("Índice inválido! Verifique o número do carro.");
        return;
    }

    const carroRemovido = carros[indiceReal];
    carros.splice(indiceReal, 1);
    precos.splice(indiceReal, 1);

    console.log(`Carro removido do estoque: ${carroRemovido}`);
   
}


console.log("CONCESSIONÁRIA ABERTA!\n");

// 1. Mostra o estoque inicial
mostrarEstoque();