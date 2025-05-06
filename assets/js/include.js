function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('include-html');
    if (file) {
      const res = await fetch(file);
      const text = await res.text();
      el.innerHTML = text;

      // Aplica as mudanças específicas por página depois que a navbar for carregada
      aplicarModificacoesNavbar();
    }
  });
}

function aplicarModificacoesNavbar() {
  const path = window.location.pathname;

  // Se for index.html, remove o form de busca
  if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
    const formBusca = document.querySelector('#form-search');
    if (formBusca) formBusca.remove();

    // Muda o link "PRODUTO" para ir para produto1.html
    const linkProduto = document.querySelector('#link-produto');
    if (linkProduto) linkProduto.setAttribute('href', 'pages/produto1.html');
  }

  // Se for produto1.html, remove o link "PRODUTO"
  if (path.includes('produto1.html')) {
    const linkProduto = document.querySelector('#link-produto');
    if (linkProduto) linkProduto.remove();

    // Também altera o link "INÍCIO" para voltar pra index.html
    const linkInicio = document.querySelector('a[href="#secao-1"]');
    if (linkInicio) linkInicio.setAttribute('href', '/index.html');
  }
}



document.addEventListener('DOMContentLoaded', includeHTML);



// link para o zap

function comprarWhatsApp() {
    const numero = '558382172222';
    const mensagem = `Olá! Tenho interesse nos seus produtos, podemos conversar?`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}