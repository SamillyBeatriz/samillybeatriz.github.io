export function typewriter(node, text, { speed = 50 } = {}) {
    if (!node) return () => { };
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    node.setAttribute('aria-label', text);

    if (prefersReduced) {
        node.textContent = text;
        return () => { };
    }

    node.textContent = '';
    let i = 0;
    let timer;

    const tick = () => {
        node.textContent += text.charAt(i++);
        if (i < text.length) timer = setTimeout(tick, speed);
    };

    tick();

    return () => clearTimeout(timer);
}
