// ALTERNATIVE CHANGE NAV BAR WIDTH

const app = document.getElementById('app'),
sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', () =>{
    app.style.gridTemplateColumns = "12.5rem 1fr";
});

sidebar.addEventListener('mouseout', () =>{
    app.style.gridTemplateColumns = "3.75rem 1fr"
});


// DIA E HORA LADO DO CLIENTE
function getDate(){
    const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    day = date.getDay(),
    hour = date.getHours(),
    minutes = date.getMinutes(),
    showdate = document.getElementById('time');

    return showdate.innerText = `${hour}:${minutes >= 10 ? minutes : '0' + minutes} - ${day} ${months[month]} ${year}`;
}

// GET DATE

getDate();
setInterval(getDate, 10000);

// SWITCH THEME

const theme = document.getElementById('theme'),
themeIcon = document.getElementById('theme-icon'),
themeDescription = document.getElementById('theme-description'),
toggleSwitch = document.getElementById('switch');
let darkTheme = false;

theme.addEventListener('click', () =>{
    if(!darkTheme){
        themeIcon.innerText = 'wb_sunny';
        themeDescription.innerText = "Tema Claro";
        toggleSwitch.style.justifyContent = "end";
        app.classList.add('dark-theme');
        darkTheme = true;
    } else{
        themeIcon.innerText = 'clear_night';
        themeDescription.innerText = "Tema Escuro";
        toggleSwitch.style.justifyContent = "start";
        app.classList.remove('dark-theme');
        darkTheme = false;
    }
});

// CAROUSEL AND PAGINATIONS