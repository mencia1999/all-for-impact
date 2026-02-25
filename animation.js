/* ============================================================ */
/* animations.js                                                */
/* Ajouter juste avant </body> :                               */
/* <script src="animations.js"></script>                       */
/* ============================================================ */

(function () {
    'use strict';

    // ──────────────────────────────────────────────
    // CSS
    // ──────────────────────────────────────────────
    const css = `

        /* ════════════════════════════════════════ */
        /* SCROLL REVEAL                            */
        /* ════════════════════════════════════════ */

        .anim-hidden {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.75s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-hidden.anim-visible {
            opacity: 1;
            transform: translateY(0);
        }
        .anim-hidden-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-hidden-left.anim-visible {
            opacity: 1;
            transform: translateX(0);
        }
        .anim-hidden-right {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-hidden-right.anim-visible {
            opacity: 1;
            transform: translateX(0);
        }
        .anim-hidden-scale {
            opacity: 0;
            transform: scale(0.88);
            transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-hidden-scale.anim-visible {
            opacity: 1;
            transform: scale(1);
        }

        /* Délais en cascade */
        .anim-delay-1 { transition-delay: 0.08s; }
        .anim-delay-2 { transition-delay: 0.17s; }
        .anim-delay-3 { transition-delay: 0.26s; }
        .anim-delay-4 { transition-delay: 0.35s; }

        /* ════════════════════════════════════════ */
        /* HERO                                     */
        /* ════════════════════════════════════════ */

        .logo {
            animation: heroFadeDown 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero h1 {
            animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;
        }
        .hero-subtitle {
            animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.38s both;
        }

        @keyframes heroFadeDown {
            from { opacity: 0; transform: translateY(-30px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        /* Cercle hero — rotation lente */
        .hero::before {
            animation: heroRing 50s linear infinite;
        }
        @keyframes heroRing {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Parallax hero — fond fixe sur desktop */
        .hero {
            background-attachment: fixed;
        }
        @media (max-width: 1280px) {
            .hero { background-attachment: scroll; }
        }

        /* ════════════════════════════════════════ */
        /* BOUTON CTA HERO                          */
        /* ════════════════════════════════════════ */

        .cta-btn {
            position: relative;
            overflow: hidden;
            animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.52s both,
                       ctaPulse 2.8s ease-in-out 1.5s infinite;
        }
        .cta-btn::after {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
            transform: skewX(-20deg);
        }
        .cta-btn:hover::after {
            left: 160%;
            transition: left 0.55s ease;
        }
        @keyframes ctaPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255, 136, 47, 0.5); }
            50%       { box-shadow: 0 0 0 12px rgba(255, 136, 47, 0); }
        }

        /* ════════════════════════════════════════ */
        /* IMPACT SECTION                           */
        /* ════════════════════════════════════════ */

        .impact-image {
            transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                        box-shadow 0.65s ease;
        }
        .impact-image:hover {
            transform: scale(1.03);
            box-shadow: 0 20px 48px rgba(0,0,0,0.15);
        }

        .stat-number {
            display: inline-block;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease;
        }
        .stat-item {
            transition: transform 0.3s ease;
            cursor: default;
        }
        .stat-item:hover {
            transform: translateX(6px);
        }
        .stat-item:hover .stat-number {
            transform: scale(1.1);
            color: #e06a10;
        }

        /* ════════════════════════════════════════ */
        /* PILLARS                                  */
        /* ════════════════════════════════════════ */

        .pillar-card {
            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                        box-shadow 0.4s ease;
        }
        .pillar-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 28px 50px rgba(0, 0, 0, 0.13);
        }
        .pillar-card.primary:hover {
            box-shadow: 0 28px 50px rgba(0, 97, 59, 0.3);
        }

        /* ════════════════════════════════════════ */
        /* SECTION TITLE LINE                       */
        /* ════════════════════════════════════════ */

        .section-title-wrap {
            display: block;
            text-align: center;
        }
        .section-title-line {
            display: block;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #00613B, #FF882F);
            border-radius: 2px;
            margin: 14px auto 0;
            transition: width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }
    
        /* ════════════════════════════════════════ */
        /* PILLAR ICONS — flottement continu        */
        /* ════════════════════════════════════════ */

        .pillar-icon {
            animation: iconFloat 4s ease-in-out infinite;
        }
        .pillar-card:nth-child(2) .pillar-icon { animation-delay: 0.6s; }
        .pillar-card:nth-child(3) .pillar-icon { animation-delay: 1.2s; }
        .pillar-card:nth-child(4) .pillar-icon { animation-delay: 1.8s; }

        @keyframes iconFloat {
            0%, 100% { transform: translateX(-50%) translateY(0px); }
            50%       { transform: translateX(-50%) translateY(-8px); }
        }
        .pillar-card:hover .pillar-icon {
            animation: none;
            transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: translateX(-50%) translateY(-8px) rotate(8deg) scale(1.12);
        }

        /* ════════════════════════════════════════ */
        /* CTA FOOTER                               */
        /* ════════════════════════════════════════ */

        .email-form {
            transition: box-shadow 0.35s ease;
        }
        .email-form:focus-within {
            box-shadow: 0 0 0 2px rgba(255, 136, 47, 0.5);
        }

        .email-submit {
            position: relative;
            overflow: hidden;
            animation: submitPulse 2.8s ease-in-out 1s infinite;
            transition: background 0.3s, transform 0.2s;
        }
        .email-submit::after {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
            transform: skewX(-20deg);
        }
        .email-submit:hover::after {
            left: 160%;
            transition: left 0.55s ease;
        }
        .email-submit:hover  { transform: scale(1.04); }
        .email-submit:active { transform: scale(0.97); }

        @keyframes submitPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255, 136, 47, 0.45); }
            50%       { box-shadow: 0 0 0 12px rgba(255, 136, 47, 0); }
        }

        /* Shake si formulaire vide */
        @keyframes formShake {
            0%, 100% { transform: translateX(0); }
            20%       { transform: translateX(-8px); }
            40%       { transform: translateX(8px); }
            60%       { transform: translateX(-5px); }
            80%       { transform: translateX(5px); }
        }
        .form-shake { animation: formShake 0.45s ease; }

        /* ════════════════════════════════════════ */
        /* SOCIAL SECTION                           */
        /* ════════════════════════════════════════ */

        .follow-btn {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                        box-shadow 0.3s ease;
        }
        .follow-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 28px rgba(0, 97, 59, 0.45);
        }
        .follow-btn::after {
            content: '';
            position: absolute;
            top: 0; left: -100%;
            width: 60%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
            transform: skewX(-20deg);
        }
        .follow-btn:hover::after {
            left: 160%;
            transition: left 0.55s ease;
        }

        .social-icon {
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.25s ease;
        }
        .social-icon:hover {
            transform: translateY(-5px) scale(1.18);
            background: #00613B;
        }

        /* Footer links — underline glissant */
        .footer-links a {
            position: relative;
            transition: color 0.25s ease;
        }
        .footer-links a::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0;
            width: 0%; height: 1px;
            background: #FF882F;
            transition: width 0.3s ease;
        }
        .footer-links a:hover::after { width: 100%; }

        /* ════════════════════════════════════════ */
        /* LANGUAGE SWITCHER                        */
        /* ════════════════════════════════════════ */

        .lang-btn {
            transition: background 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .lang-btn:hover:not(.active) { transform: scale(1.08); }
        .lang-btn.active             { transform: scale(1.05); }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // ──────────────────────────────────────────────
    // SCROLL REVEAL — directions variées
    // ──────────────────────────────────────────────
    function initScrollReveal() {
        const groups = [
            { selector: '.impact-section .section-title',  cls: 'anim-hidden',       delay: false },
            { selector: '.impact-image',                    cls: 'anim-hidden-left',  delay: false },
            { selector: '.impact-text-content > p',         cls: 'anim-hidden-right', delay: false },
            { selector: '.stat-item',                       cls: 'anim-hidden',       delay: true  },
            { selector: '.pillars-section .section-title',  cls: 'anim-hidden',       delay: false },
            { selector: '.pillars-subtitle',                cls: 'anim-hidden',       delay: false },
            { selector: '.pillar-card',                     cls: 'anim-hidden-scale', delay: true  },
            { selector: '.cta-footer h2',                   cls: 'anim-hidden',       delay: false },
            { selector: '.cta-content > p',                 cls: 'anim-hidden',       delay: false },
            { selector: '.email-form',                      cls: 'anim-hidden',       delay: false },
            { selector: '.no-spam',                         cls: 'anim-hidden',       delay: false },
            { selector: '.follow-btn',                      cls: 'anim-hidden',       delay: false },
            { selector: '.social-icon',                     cls: 'anim-hidden-scale', delay: true  },
            { selector: '.footer-content',                  cls: 'anim-hidden',       delay: false },
        ];

        groups.forEach(({ selector, cls, delay }) => {
            document.querySelectorAll(selector).forEach((el, i) => {
                el.classList.add(cls);
                if (delay) el.classList.add(`anim-delay-${Math.min(i + 1, 4)}`);
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(
            '.anim-hidden, .anim-hidden-left, .anim-hidden-right, .anim-hidden-scale'
        ).forEach(el => observer.observe(el));
    }

    // ──────────────────────────────────────────────
    // COMPTEURS STATS — chiffres qui montent
    // ──────────────────────────────────────────────
    function initStatCounters() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el  = entry.target;
                const raw = el.textContent.trim();

                // Chercher un nombre (ex: "1 300", "$1.3", "255", "54", "90")
                const match = raw.match(/[\d][.\d\s]*/);
                if (!match) return;

                const numStr = match[0].replace(/\s/g, '');
                const target = parseFloat(numStr);
                if (isNaN(target) || target === 0) return;

                const isDecimal = numStr.includes('.');
                const prefix    = raw.startsWith('$') ? '$' : '';
                const afterNum  = raw.slice(raw.indexOf(match[0]) + match[0].length);

                const duration  = 1800;
                const startTime = performance.now();

                function step(now) {
                    const progress = Math.min((now - startTime) / duration, 1);
                    const eased    = 1 - Math.pow(1 - progress, 3);
                    const value    = target * eased;
                    el.textContent = prefix
                        + (isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString('fr-FR'))
                        + afterNum;
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = raw;
                }

                requestAnimationFrame(step);
                observer.unobserve(el);
            });
        }, { threshold: 0.6 });

        document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
    }

    // ──────────────────────────────────────────────
    // PARALLAX LÉGER — texte hero au scroll
    // ──────────────────────────────────────────────
    function initHeroParallax() {
        const h1  = document.querySelector('.hero h1');
        const sub = document.querySelector('.hero-subtitle');
        if (!h1) return;

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                if (h1)  h1.style.transform  = `translateY(${y * 0.18}px)`;
                if (sub) sub.style.transform = `translateY(${y * 0.12}px)`;
                ticking = false;
            });
            ticking = true;
        }, { passive: true });
    }

    // ──────────────────────────────────────────────
    // SECTION TITLES — ligne décorative au scroll
    // ──────────────────────────────────────────────
    function initTitleLines() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const line = entry.target.querySelector('.section-title-line');
                    if (line) line.classList.add('line-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        document.querySelectorAll('.section-title').forEach(title => {
            if (title.parentElement.classList.contains('section-title-wrap')) return;

            const wrapper = document.createElement('div');
            wrapper.className = 'section-title-wrap';
            title.parentNode.insertBefore(wrapper, title);
            wrapper.appendChild(title);

            const line = document.createElement('span');
            line.className = 'section-title-line';
            wrapper.appendChild(line);

            observer.observe(wrapper);
        });
    }

    // ──────────────────────────────────────────────
    // FORM — shake si submit vide
    // ──────────────────────────────────────────────
    function initFormFeedback() {
        const form  = document.querySelector('.email-form');
        const input = document.querySelector('.email-input');
        if (!form || !input) return;

        form.addEventListener('submit', () => {
            if (!input.value.trim()) {
                form.classList.remove('form-shake');
                void form.offsetWidth;
                form.classList.add('form-shake');
            }
        });
    }

    // ──────────────────────────────────────────────
    // INIT
    // ──────────────────────────────────────────────
    function init() {
        initScrollReveal();
        initStatCounters();
        initHeroParallax();
        initTitleLines();
        initFormFeedback();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();