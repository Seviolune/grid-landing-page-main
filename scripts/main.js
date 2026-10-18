function animateCount(element, targetNum, {
  duration = 1500,
  decimals = 0,
  suffix   = ''
} = {}) {
  const start = performance.now();
  const fmt = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);        // ease-out cubic
    element.textContent = fmt.format(targetNum * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const element = entry.target;
    animateCount(element, Number(element.dataset.targetNum), {
      decimals: element.dataset.decimals || 0,
      suffix: element.dataset.suffix || ''
      });
      io.unobserve(element);
  }, { threshold: 0.5 })
})

document.querySelectorAll('[data-target-num]').forEach(element => io.observe(element));