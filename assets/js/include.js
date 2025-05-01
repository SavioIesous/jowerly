function includeHTML() {
    const elements = document.querySelectorAll('[include-html]');
    elements.forEach(async (el) => {
      const file = el.getAttribute('include-html');
      if (file) {
        const res = await fetch(file);
        const text = await res.text();
        el.innerHTML = text;
      }
    });
  }
document.addEventListener('DOMContentLoaded', includeHTML);


// link para o zap

function comprarWhatsApp() {
    const numero = '558382172222';
    const mensagem = `Olá! Tenho interesse nos seus produtos, podemos conversar?`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}

// search
function search() {
  const input = document.getElementById('searchbar').value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    const nomeProduto = produto.querySelector('.i-product').textContent.toLowerCase();
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

  const produtos = document.querySelectorAll(".produto");
  produtos.forEach(produto => {
    produto.style.display = "block"; 
  });
}
