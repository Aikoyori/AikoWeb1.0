var themable = ['theme', 'navbar', 'theme-button', 'home'];
var navclick = true;
const url = new URL(window.location);

function setText(element, text) {
    document.getElementById(element).innerHTML = text;
}

function getColorTheme() {
    var theme = localStorage.getItem('theme');
    return theme;
}
function setColorTheme(theme) {
    localStorage.setItem('theme', theme);
    themeSetter(theme);
}
function themeSetter(theme) {
    themable.forEach(function (element) {
        try {
            setApropriateColorThemeFromVariable(theme, element);
        }
        catch{ }
    });
}
function setApropriateColorThemeFromVariable(theme, element) {
    if (theme == 'dark') {
        try { document.getElementById(element).classList.remove('light'); }
        catch{ }
        document.getElementById(element).classList.add('dark');
        setText('theme-button', '☀️');
    }
    else {
        try { document.getElementById(element).classList.remove('dark'); }
        catch{ }
        document.getElementById(element).classList.add('light');
        setText('theme-button', '🌙');
    }
}
function checkColorTheme() {
    var theme = getColorTheme();
    if (theme == null) {
        theme = 'dark';
    }
    themeSetter(theme);
    return theme;
}
function toggleColorTheme() {
    var theme = getColorTheme();
    if (theme == 'dark') {
        theme = 'light';
    }
    else {
        theme = 'dark';
    }
    setColorTheme(theme);
}

function load() {
    switch (url.pathname) {
        case '/': case '/index.html':
            document.onkeypress = function (e) {
                e = e || window.event;
                window.location = '/notepad';

            }
            break;
        case '/notepad/': case '/notepad/index.html':
            var text = localStorage.getItem('text');
            document.getElementById('textbox').innerHTML = text;
            $('#textbox').bind('input propertychange', function () { localStorage.setItem('text', document.getElementById('textbox').value); });
            break;
        default:
            alert('404');

    };
    checkColorTheme();

    try { document.getElementById('theme-button').addEventListener('click', toggleColorTheme); } catch{ }
    try { document.getElementById('notepad-button').addEventListener('click', function () { window.location = '/notepad/' }); } catch{ }
    try { document.getElementById('notepad-link').addEventListener('click', function () { window.location = '/notepad/' }); } catch{ }
    try { document.getElementById('new-site-link').addEventListener('click', function () { window.location = 'https://aikoyori.xyz/' }); } catch{ }
    try { document.getElementById('home-button').addEventListener('click', function () { window.location = '/'; }); } catch{ }
    try { document.getElementById('new-site-button').addEventListener('click', function () { window.location = 'https://aikoyori.xyz/'; }); } catch{ }

    bigTryCatch();
    var write = document.getElementById('head');

}

load();