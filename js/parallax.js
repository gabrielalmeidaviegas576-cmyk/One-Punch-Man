// Efeito parallax do cabeçalho: o fundo rola mais devagar que a página
// e o logo/menu sobem um pouco mais rápido, criando profundidade.
const cabecalho = document.querySelector('.containerHeader');
const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Com JS o fundo acompanha o cabeçalho e o deslocamento é calculado abaixo
cabecalho.style.backgroundAttachment = 'scroll';

function atualizarParallax() {
    const rolagem = window.scrollY;

    if (rolagem > cabecalho.offsetHeight) return;

    cabecalho.style.backgroundPositionY = `calc(50% + ${rolagem * 0.5}px)`;
    cabecalho.style.setProperty('--deslocamento-conteudo', `${rolagem * 0.25}px`);
    cabecalho.style.setProperty('--opacidade-conteudo', 1 - rolagem / cabecalho.offsetHeight);
}

if (!reduzirMovimento) {
    window.addEventListener('scroll', () => requestAnimationFrame(atualizarParallax), { passive: true });
    atualizarParallax();
}
