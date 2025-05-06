document.querySelectorAll('.carousel').forEach(carousel => {
  let index = 0;
  const imgs = carousel.querySelectorAll('img');

  setInterval(() => {
    imgs.forEach(img => img.classList.remove('active'));
    index = (index + 1) % imgs.length;
    imgs[index].classList.add('active');
  }, 2000);
});