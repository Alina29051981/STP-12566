const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
  const header = item.querySelector('.faq-header');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    items.forEach(el => {
      el.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});
