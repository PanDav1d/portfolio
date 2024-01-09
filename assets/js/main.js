var isDark = true;
const dark = ["#202020", "#B2A59B"];
const light = ["#FAEED1", "#607274"];

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value
function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

// Function to switch theme and save to cookie
function switchTheme() {
    isDark = !isDark;
    const selectedTheme = isDark ? dark : light;

    document.documentElement.style.setProperty('--bg-color', selectedTheme[0]);
    document.documentElement.style.setProperty('--text-color', selectedTheme[1]);

    // Save the theme to a cookie
    setCookie('theme', isDark ? 'dark' : 'light', 30); // Save the theme for 30 days
}

// Check if theme is in cookie
const savedTheme = getCookie('theme');
if (savedTheme) {
    isDark = savedTheme === 'dark';
    const selectedTheme = isDark ? dark : light;

    document.documentElement.style.setProperty('--bg-color', selectedTheme[0]);
    document.documentElement.style.setProperty('--text-color', selectedTheme[1]);
} else {
    // Default to dark theme if no theme is saved
    switchTheme();
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        window.location.replace('/index.html');
    }
    if (event.key === 't'){
        switchTheme();
    }
});
