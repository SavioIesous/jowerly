function includeHTML(callback) {
  const elements = document.querySelectorAll('[include-html]');
  let total = elements.length;
  let carregados = 0;

  if (total === 0 && typeof callback === 'function') {
    callback();
    return;
  }

  elements.forEach(async (el) => {
    const file = el.getAttribute('include-html');
    if (file) {
      try {
        const res = await fetch(file);
        const text = await res.text();
        el.innerHTML = text;

        aplicarModificacoesNavbar();
        aplicarModificacoesFooter(); // <- Adicionado aqui
      } catch (e) {
        el.innerHTML = 'Erro ao carregar: ' + file;
      }
    }

    carregados++;
    if (carregados === total && typeof callback === 'function') {
      callback();
    }
  });
}

function aplicarModificacoesNavbar() {
  const path = window.location.pathname;

  // Se for index.html, remove o form de busca
  if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
    const formBusca = document.querySelector('#form-search');
    if (formBusca) formBusca.remove();

    const linkProduto = document.querySelector('#link-produto');
    if (linkProduto) linkProduto.setAttribute('href', 'pages/produtos.html');
  }

  // Se for produtos.html, remove o link "PRODUTO" e muda o link do "INÍCIO"
  if (path.includes('produtos.html')) {
    const linkProduto = document.querySelector('#link-produto');
    if (linkProduto) linkProduto.remove();

    const linkInicio = document.querySelector('a[href="#secao-1"]');
    if (linkInicio) linkInicio.setAttribute('href', '/index.html');

    const linkProdutoFooter = document.querySelector('a[href="pages/contatos.html"');
    if (linkProdutoFooter) linkProdutoFooter.setAttribute('href', 'contatos.html');
  }

  // Se for contatos.html, remove o link de "Contatos" e esconde o form de busca
  if (path.includes('contatos.html')) {
    // Remove o item de "Contatos"
    const itemContato = document.querySelector('.nav-item.dropdown');
    if (itemContato) itemContato.style.display = 'none'; // Esconde o item "Contatos"

    const formBusca = document.querySelector('#form-search');
    if (formBusca) formBusca.remove();

    const limparBusca = document.querySelector('#limpar-busca');
    if (limparBusca) limparBusca.remove();

     // Navbar: Ajusta os links
     const linkInicioNavbar = document.querySelector('a[href="#secao-1"]');
     if (linkInicioNavbar) linkInicioNavbar.setAttribute('href', '/index.html');
 
     const linkSobreNavbar = document.querySelector('a[href="#secao-2"]');
     if (linkSobreNavbar) linkSobreNavbar.setAttribute('href', '/index.html#secao-2');
 
     const linkProdutoNavbar = document.querySelector('a[href="/pages/produtos.html"]');
     if (linkProdutoNavbar) linkProdutoNavbar.setAttribute('href', '/pages/produtos.html');
 
     // Footer: Ajusta os links
     const linkInicioFooter = document.querySelector('footer a[href="#secao-1"]');
     if (linkInicioFooter) linkInicioFooter.setAttribute('href', '/index.html');
 
     const linkSobreFooter = document.querySelector('footer a[href="#secao-2"]');
     if (linkSobreFooter) linkSobreFooter.setAttribute('href', '/index.html#secao-2');
 
     const linkProdutoFooter = document.querySelector('footer a[href="/pages/produtos.html"]');
     if (linkProdutoFooter) linkProdutoFooter.setAttribute('href', '/pages/produtos.html');
  }
}

document.addEventListener('DOMContentLoaded', aplicarModificacoesNavbar);



function aplicarModificacoesFooter() {
  const path = window.location.pathname;

  if (path.includes('produtos.html')) {
    const links = document.querySelectorAll('footer a');
    links.forEach(link => {
      if (link.textContent.trim().toLowerCase() === 'sobre nós') {
        link.setAttribute('href', '/index.html#secao-2');
      }
    });
  }
}

// Garante que as modificações sejam aplicadas também após o carregamento geral
document.addEventListener('DOMContentLoaded', () => {
  includeHTML(() => {
    aplicarModificacoesNavbar();
    aplicarModificacoesFooter();
  });
});

// Função do WhatsApp
function comprarWhatsApp() {
  const numero = '558382172222';
  const mensagem = `Olá! Tenho interesse nos seus produtos, podemos conversar?`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
}
