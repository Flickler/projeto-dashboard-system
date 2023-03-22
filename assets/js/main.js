// MAKE DROPDOWN - FUNCTION
function dropdown(icon, container){
    return(
        container.visible = false,
        icon.addEventListener('click', ()=>{
            if(!container.visible){
                container.style.display = "flex";
                container.visible = !container.visible;
            } else{
                container.style.display = "none";
                container.visible = !container.visible;
            }
        })
    )
}

// CONF DROPDOWN
const config = document.getElementById('config'),
configDropdown = document.getElementById('config__dropdown');
dropdown(config, configDropdown);

// SUPPORT DROPDOWN
const support = document.getElementById('support'),
supportDropdown = document.getElementById('support__dropdown');
dropdown(support, supportDropdown);

// NOTIFICATION DROPDOWN
const notification = document.getElementById('notifications'),
notificationsDropdown = document.getElementById('notifications__dropdown'),
notificationStatus = document.getElementById('notifications__status'); // MEXER - 20/03/2023
dropdown(notification, notificationsDropdown);

// PROFILE DROPDOWN
const profile = document.getElementById('profile'),
profileDropdown = document.getElementById('profile__dropdown');
dropdown(profile, profileDropdown);

// FUNCTION CHECK DROPDOWN OPEN

const dropdownsIcons = [config, support, notification, profile],
dropdownsContainers = [configDropdown, supportDropdown, notificationsDropdown, profileDropdown];

function dropdownClose(){
    for(container of dropdownsContainers){
        if(container.visible == true){
            container.style.display = "none";
            container.visible = false;
            console.log(container.visible);
        }
    }
}

// SIDEBAR EXPAND ON HOVER
const app = document.getElementById('app'),
sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', () =>{
    app.style.gridTemplateColumns = "12.5rem auto";
});

sidebar.addEventListener('mouseout', () =>{
    app.style.gridTemplateColumns = "3.75rem auto";
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
app.darkTheme = false;

theme.addEventListener('click', () =>{
    if(!app.darkTheme){
        themeIcon.innerText = 'wb_sunny';
        themeDescription.innerText = "Tema Claro";
        toggleSwitch.style.justifyContent = "end";
        app.classList.add('dark-theme');
        document.body.style.backgroundColor = "#282A36"
        app.darkTheme = !app.darkTheme;
    } else{
        themeIcon.innerText = 'clear_night';
        themeDescription.innerText = "Tema Escuro";
        toggleSwitch.style.justifyContent = "start";
        app.classList.remove('dark-theme');
        document.body.style.backgroundColor = "#e0e7ff"
        app.darkTheme = !app.darkTheme;
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

// CAROUSEL AND PAGINATIONS - CHECK ERRORS IMAGES
const slider = document.getElementById('slider'),
dots = document.getElementsByClassName('pagination__dots');
let img = 1;

setInterval(() =>{
    if(img <= 2){
        slider.src = `./assets/img/publi${img}.jpg`;
        dots[img-1].classList.remove('active');
        dots[img].classList.add('active');
        img += 1;
    } else{
        img = 0;
        slider.src = `./assets/img/publi${img}.jpg`;
        dots[2].classList.remove('active');
        dots[img].classList.add('active');
        img += 1;
    }
}, 5000);

// MENU LINK ACTIVE
const menuLink = document.getElementsByClassName('menu__link');
menuLink[0].classList.add('active');
