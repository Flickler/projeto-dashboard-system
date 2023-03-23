// Objects
class Aula{
    constructor(hora, turma, sala, curso, undCurricular, professor, dia, status='pendente'){
        this.hora = hora;
        this.turma = turma;
        this.sala = sala;
        this.curso = curso;
        this.undCurricular = undCurricular;
        this.professor = professor;
        this.dia = dia;
        this.status = status;
    }
}
class Professor{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.aulas = []
        professores.push(this);
    }

    cadastrarAula(hora, turma, sala, curso, undCurricular, dia){
        this.aulas.push(new Aula(hora, turma, sala, curso, undCurricular,
            this.nome, dia));
        if(dia == new Date().getDate()){
            return aulasDoDia();
        }
    }

    setAula(aula, set='cancelar'){
        if(set == 'cancelar'){
            return this.aulas[aula].status = 'cancelado';
        } else if(set == 'completar'){
            return this.aulas[aula].status = 'completo';
        }
    }
}

// FUNCTION AULAS DO DIA
function aulasDoDia(dia){
    const tabela = document.getElementById('station-content'),
    aulasDeHoje = [];

    for(professor of professores){
        for(aula of professor.aulas){
            if(aula.dia == dia){
                aulasDeHoje.push(aula);
            }
        }
    }
    tabela.innerHTML =
    `
    <h3 class="content__header">
        Quinta, ${dia} de março de 2023
    </h3>
    <div class="agenda__row agenda__label">
        <div>Hora</div>
        <div>Turma</div>
        <div>Sala</div>
        <div>Curso</div>
        <div>Unidade Curricular</div>
        <div>Professor</div>
        <div>Status</div>
    </div>
    `

    for(aula of aulasDeHoje){
        tabela.innerHTML += 
        `
        <div class="agenda__row agenda__data">
            <div>${aula.hora}</div>
            <div>${aula.turma}</div>
            <div>${aula.sala}</div>
            <div>${aula.curso}</div>
            <div>${aula.undCurricular}</div>
            <div>${aula.professor}</div>
            <div>
                <span class="agenda__status status__${aula.status}">${aula.status}</span>
            </div>
        </div>
        `
    };
}

// CREATING PROFESSORS
const professores = [],
profJoao = new Professor('João', 'das Neves'),
profMaria = new Professor('Maria', 'Fernandes'),
profPaula = new Professor('Paula', 'Oliveira');

// CREATING AULAS
profJoao.cadastrarAula('10:00', 01010, 'A2', 'Desenvolvimento Web',
                        'Unidade Curricular', new Date().getDate());
profJoao.setAula(0, 'completar');
profMaria.cadastrarAula('14:00', 01011, 'A2', 'Programação de Sistemas',
                        'Unidade Curricular', new Date().getDate());
profMaria.setAula(0);
profJoao.cadastrarAula('14:00', 01012, 'A3', 'Técnico em Informática',
                        'Unidade Curricular', new Date().getDate());
profPaula.cadastrarAula('19:00', 01010, 'A2', 'Desenvolvimento Web',
                        'Unidade Curricular', new Date().getDate());

// EXECUTING aulasDoDia FUNCTION
aulasDoDia(new Date().getDate());

// MAKE DROPDOWN - FUNCTION
function dropdown(icon, container){
    dropdownsIcons.push(icon);
    dropdownsContainers.push(container);
    return(
        container.visible = false,
        icon.addEventListener('click', ()=>{
            if(!container.visible){
                dropdownClose();
                container.style.display = "flex";
                container.visible = !container.visible;
            } else{
                container.style.display = "none";
                container.visible = !container.visible;
            }
        })
    )
}

// ALL DROPDOWNS
const dropdownsIcons = [],
dropdownsContainers = [];

//VIEW DROPDOWN
// const view = document.getElementById('view'),
// viewDropdown = document.getElementById('view__dropdown');
// dropdown(view, viewDropdown);

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
function dropdownClose(){
    for(container of dropdownsContainers){
        if(container.visible == true){
            container.style.display = "none";
            container.visible = false;
        }
    }
}

// SIDEBAR EXPAND ON HOVER
const app = document.getElementById('app'),
sidebar = document.getElementById('sidebar');

sidebar.addEventListener('mouseover', () =>{
    app.style.gridTemplateColumns = "12.5rem auto";
});

sidebar.addEventListener('mouseleave', () =>{
    app.style.gridTemplateColumns = "3.75rem auto";
    dropdownClose();
});


// GET DATE USERS NAV
const showDate = document.getElementById('time');

function getDateToday(){
    const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    day = date.getDate(),
    hour = date.getHours(),
    minutes = date.getMinutes();

    return showDate.innerText = `${hour}:${minutes >= 10 ? minutes : '0' + minutes} — Hoje, ${day} ${months[month]} ${year}`;
}

// GET DATE TODAY
getDateToday();
setInterval(getDateToday, 10000);

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
