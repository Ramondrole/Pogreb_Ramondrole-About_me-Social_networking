const socialTranslations = {
    ru: {
        title: "Мои Соц-сети:",
        about: "Обо мне",
        games: "Наши игры",
        functions: "Полезные функции"
    },
    en: {
        title: "My Social Networks:",
        about: "About me",
        games: "Our games",
        functions: "Useful functions"
    },
    de: {
        title: "Meine Sozialen Netzwerke:",
        about: "Über mich",
        games: "Unsere Spiele",
        functions: "Nützliche Funktionen"
    }
};

let currentLang = localStorage.getItem('social_language') || 'ru';

function t(key) {
    return socialTranslations[currentLang]?.[key] || socialTranslations.ru[key];
}

function updateSocialUILanguage() {
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = t('title');
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keys = ['about', 'games', 'functions'];
        if (idx < keys.length) link.textContent = t(keys[idx]);
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('social_language', lang);
    updateSocialUILanguage();
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

updateSocialUILanguage();