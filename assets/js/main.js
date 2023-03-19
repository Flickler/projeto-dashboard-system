// SIDEBAR EXPAND ON HOVER

const app = document.getElementById('app'),
sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', () =>{
    app.style.gridTemplateColumns = "12.5rem 1fr";
});

sidebar.addEventListener('mouseout', () =>{
    app.style.gridTemplateColumns = "3.75rem 1fr"
});


// GET DATE USERS NAV

const showDate = document.getElementById('time');

function getDate(){
    const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    day = date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes();

    return showDate.innerText = `${hour}:${minutes >= 10 ? minutes : '0' + minutes} — Hoje, ${day} ${months[month]} ${year}`;
}

// GET DATE

getDate();
setInterval(getDate, 10000);

// SWITCH DARK THEME

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

// SEARCH BAR

const search = document.getElementById('search');

search.addEventListener('focusin', ()=>{
    const searchIco = document.getElementsByClassName('search__ico');
    searchIco[0].style.display = "none";
    search.style.width = "50rem";
    showDate.style.display = "none";
    search.placeholder = "";
});

search.addEventListener('focusout', ()=>{
    const searchIco = document.getElementsByClassName('search__ico');
    if(search.value == ""){
        searchIco[0].style.display = "inline-block";
    }
    search.placeholder = "Pesquisar";
    showDate.style.display = "block";
    search.style.width = "20rem";
});

// CAROUSEL AND PAGINATIONS

const slider = document.getElementById('slider'),
dots = document.getElementsByClassName('pagination__dots');
let img = 1;

setInterval(() =>{
    if(img <= 2){
        slider.src = `./assets/img/ads${img}.jpg`;
        dots[img-1].classList.remove('active');
        dots[img].classList.add('active');
        img += 1;
    } else{
        img = 0;
        slider.src = `./assets/img/ads${img}.jpg`;
        dots[2].classList.remove('active');
        dots[img].classList.add('active');
        img += 1;
    }
}, 5000);