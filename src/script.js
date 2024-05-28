async function listaCards() {
    const conexao = await fetch("https://664e8bf3fafad45dfae05e33.mockapi.io/db");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaCard(imagem, produto, preco) { 
    const conexao = await fetch("https://664e8bf3fafad45dfae05e33.mockapi.io/db", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ 
            imagem: imagem, 
            produto: produto, 
            preco: preco 
        }) 
    }); 
    
    if (!conexao.ok) { 
        throw new Error('Erro ao criar card'); 
    } 
    
    const conexaoConvertida = await conexao.json(); 
    
    return conexaoConvertida;
}

export const script = { 
    listaCards, 
    criaCard 
};