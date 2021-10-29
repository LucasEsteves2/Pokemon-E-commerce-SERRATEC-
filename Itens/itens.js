console.log("Hello wordl");

var itens = document.querySelectorAll('.btnComprar');

let produtos = [
    {
        nome: 'Buddy_barrier',
        preço: 2000,
        tag: 'item',
        inCart: 0
    },

    {
        nome: 'Focus_band',
        preço: 3000,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Muscle_Band',
        preço: 4000,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Score_Shield',
        preço: 5000,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Wise_Glasse',
        preço: 6000,
        tag: 'item',
        inCart: 0
    },
    {
        nome: 'Scope_Lens',
        preço: 7000,
        tag: 'item',
        inCart: 0
    }

];


for (let i = 0; i < itens.length; i++) {

    itens[i].addEventListener("click", event => {
        event.preventDefault()
        carrinho(produtos[i])
        valorFinal(produtos[i])
    })

}
//teste

//funcao para adicionar no local storage
function carrinho(produtinho) {

    //pegando do localStorage
    let produto = localStorage.getItem('carrinho');
    produto = parseInt(produto);

    // se ja tiver alguma coisa no carrinho
    if (produto) {
        localStorage.setItem('carrinho', produto + 1)

        document.querySelector(".qtd_carrinho").textContent = produto + 1;
    }
    else {
        localStorage.setItem('carrinho', 1)
        document.querySelector(".qtd_carrinho").textContent = 1;
    }
    alert(`${produtinho.nome} Adicionado ao carrinho`)

    qtdCarrinho(produtinho);
}

function qtdCarrinho(produtinho) {

    let itensCarrinho = localStorage.getItem('produtoCarrinho');
    itensCarrinho= JSON.parse(itensCarrinho);   

    //se o carrinho nao estive fazio
    if(itensCarrinho!= null)
    {
        if(itensCarrinho!=undefined)
        {
            itensCarrinho = {
                ...itensCarrinho,
                [produtinho.nome]: produtinho
            }
        }
        itensCarrinho[produtinho.nome].inCart +=1
    }
    else
    {
        produtinho.inCart = 1
        itensCarrinho = {
            [produtinho.nome]: produtinho
        }
    }

    localStorage.setItem("produtoCarrinho", JSON.stringify(itensCarrinho))

}


function valorFinal(produtinho)
{
    let valorTotal = localStorage.getItem("ValorTotal") 
    
    //aa
    if(valorTotal != null)
    {
        valorTotal =parseInt(valorTotal);
        localStorage.setItem("ValorTotal",valorTotal +produtinho.preço)

    }
    else
    {
        localStorage.setItem("ValorTotal",produtinho.preço)
        
    }
}



//Carrega o carrinho automatico (quando reloga a pagina)
function carregandoCarrinho() {

    let produto = localStorage.getItem('carrinho');



    if (produto) {
        document.querySelector(".qtd_carrinho").textContent = produto;
    }
}
carregandoCarrinho()



