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
  // 558391101416
  // 558382172222
    const numero = '558391101416';
    const mensagem = `Olá! Tenho interesse nos seus produtos, podemos conversar?`;
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, '_blank');
}

// search

function search() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let nomes = document.getElementsByClassName('i-product');
  let cards = document.getElementsByClassName('produto');

  for (let i = 0; i < nomes.length; i++) {
    let texto = nomes[i].innerText.toLowerCase();
    if (texto.includes(input)) {
      cards[i].classList.remove("hide");
    } else {
      cards[i].classList.add("hide");
    }
  }
}