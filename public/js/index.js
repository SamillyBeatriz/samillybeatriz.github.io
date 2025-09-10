import { typewriter } from './modules/typing.js';
import { initScrollReveal } from './modules/scroll-reveal.js';

const TYPING_TEXT = 'Desenvolvedora Python | Node.js | JavaScript';

window.addEventListener('DOMContentLoaded', () => {

    const typingEl = document.querySelector('#typing');
    typewriter(typingEl, TYPING_TEXT, { speed: 50 });

    initScrollReveal('.home__subtitle');
    initScrollReveal('.card__item');
    initScrollReveal('.link__projects');
});
