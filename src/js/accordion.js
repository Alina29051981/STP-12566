const faqItemsEl = document.querySelectorAll('[data-faq-item]');

faqItemsEl.forEach(item => {
  const headerEl = item.querySelector('[data-faq-header]');

  headerEl.addEventListener('click', () => {
    const isOpen = item.dataset.visible === 'open';

    faqItemsEl.forEach(el => {
      el.dataset.visible = 'close';
    });

    if (!isOpen) {
      item.dataset.visible = 'open';
    }
  });
});
