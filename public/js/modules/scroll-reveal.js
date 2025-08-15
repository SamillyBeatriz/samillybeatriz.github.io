// scroll-reveal.js
export function initScrollReveal(selector = '.home__subtitle') {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elems = document.querySelectorAll(selector);
    const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

    if (!hasGSAP || prefersReduced) {
        elems.forEach((el) => {
            el.style.opacity = 1;
            el.style.transform = 'none';
        });
        if (!prefersReduced && !hasGSAP) console.warn('GSAP/ScrollTrigger não carregados.');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    elems.forEach((el) => {
        gsap.fromTo(
            el,
            { y: 100, autoAlpha: 0 },
            {
                y: 0, autoAlpha: 1,
                duration: 1.2,
                ease: 'back',
                overwrite: 'auto',

                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );
    });
}
