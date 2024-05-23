Segunda tentativa para o deploy no vercel, alterações nos arquivos " script.js " e " deletarCards.js ".

---------------------------------------------------------------------------------------------------------
" Script. js "
async function listaCards (){
    const conexao = await fetch("https://664e8bf3fafad45dfae05e33.mockapi.io/db");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaCard(imagem, produto, preco){
    const conexao = await fetch("https://664e8bf3fafad45dfae05e33.mockapi.io/db",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            produto: produto,
            preco: preco
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const script = {
    listaCards,
    criaCard
}

----------------------------------------------------------------------------------------------------

" deletarCards.js "

import { script } from "./script.js"; 

const cardsContainer = document.querySelector("[data-cards]"); 

cardsContainer.addEventListener("click", async (event) => { 
    if (event.target.id === "lixo") { 
        const cardDiv = event.target.closest(".card"); 
        const produto = cardDiv.querySelector(".produto").textContent; 
        try { 
            await deletarCard(produto); 
            cardDiv.remove(); 
            alert("Card deletado com sucesso!"); 
        } catch (error) { 
            console.error("Erro ao deletar card", error); 
            alert("Erro ao deletar card."); 
        } 
    } 
}); 


async function deletarCard(produto) {
      
     const cards = await script.listaCards(); 
     const card = cards.find(card => card.produto === produto); 
     if (!card) { throw new Error("Card não encontrado"); 

     } 
     
      
     const response = await fetch('https://<PROJECT_TOKEN.mockapi.io/tasks/1', {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        
      }).then(task => {
       
      }).catch(error => {

      }) 
} 

export default deletarCard;
