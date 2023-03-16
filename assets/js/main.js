
/* SIDEBAR INTERACTION
const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwtich = body.querySelector('.toggle-switch'), 
    modeText = body.querySelector('.mode-text');

    toggle.addEventListener('click', () =>{
        sidebar.classList.toggle('close');
    });

    searchBtn.addEventListener('click', () =>{
        sidebar.classList.remove('close');
    });

    modeSwtich.addEventListener('click', () =>{
        body.classList.toggle('dark');

        if(body.classList.contains('dark')){
            modeText.innerText= 'Modo claro'
        }else{
            modeText.innerText= 'Modo escuro'

        }
    });

    */

// JUNIOR CODES

// ALTERNATIVE CHANGE NAV BAR WIDTH

const app = document.getElementById('app'),
sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', () =>{
    app.style.gridTemplateColumns = "1fr 5fr";
});

sidebar.addEventListener('mouseout', () =>{
    app.style.gridTemplateColumns = "1fr 15fr"
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

// const theme = document.getElementById('theme'),
// themeIcon = document.getElementById('theme-icon');

// theme.addEventListener('click', () =>{
//     themeIcon.innerText = 'wb_sunny';
// });