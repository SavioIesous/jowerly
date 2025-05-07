const produtos = [
  {
      tipo: "Brincos",
      itens: [
        {
          nome: "Brinco Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/brincos/brinco4.png",
          imagensExtras: [
            "/Pprodutos/brincos/brinco1.png",
            "/Pprodutos/brincos/brinco2.png",
            "/Pprodutos/brincos/brinco3.png"
          ],
          descricao: "Brinco de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Brinco Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/brincos/brinco4.png",
          imagensExtras: [
            "/Pprodutos/brincos/brinco1.png",
            "/Pprodutos/brincos/brinco2.png",
            "/Pprodutos/brincos/brinco3.png"
          ],
          descricao: "Brinco de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Brinco Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/brincos/brinco7.png",
          imagensExtras: [
            "/Pprodutos/brincos/brinco1.png",
            "/Pprodutos/brincos/brinco2.png",
            "/Pprodutos/brincos/brinco3.png"
          ],
          descricao: "Brinco de ouro 18k com design moderno e elegante."
        },
      ]
    },    
  {
      tipo: "Colares",
      itens: [
        {
          nome: "Colar de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/colar/colar4.png",
          imagensExtras: [
            "/Pprodutos/colar/colar1.png",
            "/Pprodutos/colar/colar2.png",
            "/Pprodutos/colar/colar3.png"
          ],
          descricao: "colar de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Colar de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/colar/colar5.png",
          imagensExtras: [
            "/Pprodutos/colar/colar1.png",
            "/Pprodutos/colar/colar2.png",
            "/Pprodutos/colar/colar3.png"
          ],
          descricao: "colar de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Colar de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/colar/colar6.png",
          imagensExtras: [
            "/Pprodutos/colar/colar1.png",
            "/Pprodutos/colar/colar2.png",
            "/Pprodutos/colar/colar3.png"
          ],
          descricao: "colar de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Colar de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/colar/colar7.png",
          imagensExtras: [
            "/Pprodutos/colar/colar1.png",
            "/Pprodutos/colar/colar2.png",
            "/Pprodutos/colar/colar3.png"
          ],
          descricao: "colar de ouro 18k com design moderno e elegante."
        },
      ]
    },    
  {
      tipo: "Anéis",
      itens: [
        {
          nome: "Anel de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/anel/anel4.png",
          imagensExtras: [
            "/Pprodutos/anel/anel1.png",
            "/Pprodutos/anel/anel2.png",
            "/Pprodutos/anel/anel3.png"
          ],
          descricao: "anel de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Anel de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/anel/anel5.png",
          imagensExtras: [
            "/Pprodutos/anel/anel1.png",
            "/Pprodutos/anel/anel2.png",
            "/Pprodutos/anel/anel3.png"
          ],
          descricao: "Anel de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Anel de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/anel/anel6.png",
          imagensExtras: [
            "/Pprodutos/anel/anel1.png",
            "/Pprodutos/anel/anel2.png",
            "/Pprodutos/anel/anel3.png"
          ],
          descricao: "Anel de ouro 18k com design moderno e elegante."
        },
        {
          nome: "Anel de Ouro",
          preco: "R$ 299",
          imagem: "/Pprodutos/anel/anel7.png",
          imagensExtras: [
            "/Pprodutos/anel/anel1.png",
            "/Pprodutos/anel/anel2.png",
            "/Pprodutos/anel/anel3.png"
          ],
          descricao: "Anel de ouro 18k com design moderno e elegante."
        },
      ]
    },    
]
  const container = document.getElementById("products-container");

  produtos.forEach((categoria) => {
    const title = document.createElement("h2");
    title.textContent = categoria.tipo;
    container.appendChild(title);

    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scroll-section";

    categoria.itens.forEach((item) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}" />
        <div class="card-content">
          <div class="product-name">${item.nome}</div>
          <div class="price">${item.preco}</div>
        </div>
      `;
      card.addEventListener("click", () => showModal(item));
      scrollDiv.appendChild(card);
    });

    container.appendChild(scrollDiv);
  });

  function showModal(item) {
document.getElementById("modal-title").textContent = item.nome;
document.getElementById("modal-desc").textContent = item.descricao || "Descrição não disponível.";

const gallery = document.getElementById("modal-gallery");
gallery.innerHTML = "";
(item.imagensExtras || [item.imagem]).forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  gallery.appendChild(img);
});

const msg = encodeURIComponent(`Olá! Tenho interesse no produto "${item.nome}". Ainda está disponível?`);
document.getElementById("whatsapp-button").href = `https://wa.me/558382172222?text=${msg}`;

document.getElementById("product-modal").classList.add("active");
}

  function closeModal() {
    document.getElementById("product-modal").classList.remove("active");
  }

  //fechar ao clicar na tela
  document.getElementById("product-modal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  
// Search
function search() {
  const input = document.getElementById('searchbar').value.toLowerCase();
  const produtos = document.querySelectorAll('.product-card');

  produtos.forEach(produto => {
    const nomeProduto = produto.querySelector('.product-name').textContent.toLowerCase();
    if (nomeProduto.includes(input)) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
}

function limparBusca() {
  const input = document.getElementById("searchbar");
  input.value = ""; 

  const produtos = document.querySelectorAll(".product-card");
  produtos.forEach(produto => {
    produto.style.display = "block"; 
  });
}
