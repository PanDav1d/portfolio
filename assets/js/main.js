var isDark = true;
var allowCookies = true;
const dark = ["#202020", "#B2A59B"];
const light = ["#FAEED1", "#607274"];


const cookiesAllowed = getCookie('allowCookies');
if(cookiesAllowed){
    if(cookiesAllowed == 'allow' && window.location.pathname === "/index.html"){
        document.getElementById("plane").style.opacity = 0;
        document.getElementById("plane").style.pointerEvents = "None";
        document.getElementById("cookiesChoice").style.opacity = 0;
        document.getElementById("cookiesChoice").style.pointerEvents = "None";
    }else{
        allowCookies = false;
    }
}else{
    allowCookies = false;
}


function acceptCookies(choice){
    if(choice){
        allowCookies = true;
        setCookie('allowCookies', 'allow',30);
    }else{
        allowCookies = false;
    }
    document.getElementById("plane").style.opacity = 0;
    document.getElementById("plane").style.pointerEvents = "None";
    document.getElementById("cookiesChoice").style.opacity = 0;
    document.getElementById("cookiesChoice").style.pointerEvents = "None";
}

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

    if(allowCookies == false){
        return;
    }
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


function copyToClipboard(text){
    var mailIcon = document.getElementById("mail");
    mailIcon.removeAttribute("class");
    mailIcon.classList.add("bi");
    mailIcon.classList.add("bi-clipboard-check");
    navigator.clipboard.writeText(text);
    setTimeout(function(){
        mailIcon.removeAttribute("class");
        mailIcon.classList.add("bi");
        mailIcon.classList.add("bi-envelope");
        mailIcon.parentElement.style.backgroundColor = "#ffffff00";
    },2000);
}

function triggerAlert(text,icon,color){
    const alert = document.getElementById("alert");
    const startPos = alert.style.transform;
    alert.querySelector('span').innerHTML = icon;
    alert.querySelector('p').innerHTML = text;
    alert.style.backgroundColor = color;
    alert.style.display = "flex";
    alert.style.opacity = "1";
    alert.style.transform = "translateX(-50%) translateY(1%)";

    copyToClipboard("muellerdavid.3008@gmail.com");

    setTimeout(function(){
        alert.style.opacity = "0";
        alert.style.transform = startPos;
    },3520);

}