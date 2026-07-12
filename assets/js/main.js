document.addEventListener('DOMContentLoaded', () => {
  const replacePlaceholderImages = () => {
    const images = document.querySelectorAll('img');

    images.forEach((img, index) => {
      const currentSrc = (img.getAttribute('src') || '').trim();
      const isPlaceholderImage = !currentSrc ||
        currentSrc.startsWith('assets/') ||
        currentSrc.startsWith('./') ||
        currentSrc.startsWith('../') ||
        currentSrc.includes('your-icon-path') ||
        currentSrc.includes('your icon path') ||
        currentSrc.includes('simple icons links') ||
        currentSrc.includes('icon-path') ||
        currentSrc.includes('resim') ||
        currentSrc === 'null';

      if (!isPlaceholderImage || img.dataset.randomized === 'true') {
        return;
      }

      const width = parseInt(img.getAttribute('width') || img.getAttribute('data-width') || '800', 10) || 800;
      const height = parseInt(img.getAttribute('height') || img.getAttribute('data-height') || '600', 10) || 600;
      const seed = `${(img.getAttribute('alt') || 'portfolio').toLowerCase().replace(/\s+/g, '-')}-${index + 1}-${Math.random().toString(36).slice(2, 8)}`;

      img.setAttribute('src', `https://picsum.photos/seed/${seed}/${width}/${height}`);
      img.setAttribute('data-randomized', 'true');
      img.setAttribute('loading', 'lazy');
    });
  };

  replacePlaceholderImages();

  const observer = new MutationObserver(() => {
    replacePlaceholderImages();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
