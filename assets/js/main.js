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

    setStatusAula(aula, set='cancelada'){
        if(set == 'cancelada'){
            return this.aulas[aula].status = 'cancelada';
        } else if(set == 'concluido'){
            return this.aulas[aula].status = 'concluido';
        } else if(set == 'em_progresso'){
            return this.aulas[aula].status = 'em_progresso';
        }
    }

    editar(){
        const rows = document.getElementsByClassName('agenda__data');
        for(let row of rows){
            const div = row.getElementsByTagName('div');
            if(div[5].innerText == this.nome){
                row.innerHTML =
                `
                <input type="text" value="${div[0].innerText}">
                <input type="text" value="${div[1].innerText}">
                <input type="text" value="${div[2].innerText}">
                <input type="text" value="${div[3].innerText}">
                <input type="text" value="${div[4].innerText}">
                `
            }
        }
    }
}

// FUNCTION AULAS DO DIA
function aulasDoDia(dia){
    const aulasDeHoje = [];

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
                <span class="agenda__status status__${aula.status}">${aula.status.replace('_', ' ')}</span>
            </div>
        </div>
        `
    };
}
//CREATING TABELA
const tabela = document.getElementById('station-content');

// CREATING PROFESSORS
const professores = [],
profJoao = new Professor('Renisson', 'Silva'),
profMaria = new Professor('Edgar', 'Segundo'),
profPaula = new Professor('Bianca', 'Souza');

// CREATING PROF IN LOGIN
const professorOn = profJoao;

// CREATING AULAS
profJoao.cadastrarAula('10:00', 01010, 'A2', 'Desenvolvimento Web',
                        'Unidade Curricular', new Date().getDate());
profJoao.setStatusAula(0, 'concluido');
profMaria.cadastrarAula('14:00', 01011, 'A2', 'Programação de Sistemas',
                        'Unidade Curricular', new Date().getDate());
profMaria.setStatusAula(0);
profJoao.cadastrarAula('14:00', 01012, 'A3', 'Técnico em Informática',
                        'Unidade Curricular', new Date().getDate());
profJoao.setStatusAula(1, 'em_progresso')
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
const view = document.getElementById('view'),
viewDropdown = document.getElementById('view__dropdown');
dropdown(view, viewDropdown);

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

// CAROUSEL AND PAGINATIONS
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

// MENU LINK ACTIVE FUNCTION
function menuActive(container, links){
    const buttons = container.getElementsByClassName(`${links}`);
    for(let link of buttons){
        link.addEventListener('click', ()=>{
            removeActive(container, links);
            link.classList.add('active');
        })
    }
}

// MENU LINK REMOVE ACTIVE FUNCTION
function removeActive(container, links){
    const buttons = container.getElementsByClassName(`${links}`);
    for(let link of buttons){
        link.classList.remove('active');
    }
}

const menuLink = document.getElementById('sidebar-active'),
stationtabs = document.getElementById('station-tabs');

// CREAT MENU LINK ACTIVE
menuActive(menuLink, 'menu__link');
menuActive(stationtabs, 'station__tab');

// CREAT MENU LINK ACTIVE
// ---------------------------------------------------------

// SWITCH SCREEN FUNCTION
function switchScreen(screen){
    if(screen == 'tools'){
        tabela.innerHTML =
        `
        <div class="tools__container">
            <h3 class="content__header">
                Meus Apps
            </h3>
            <div class="tools__content">
                <div class="card__wrapper">
                    <div class="card__title">
                        <h4>Kanban Board</h4>
                    </div>
                    <div class="kanban__wrapper">
                        <div class="card">
                            <div class="card__title">
                                <h5>A Fazer</h5>
                                <div class="edit__card">
                                    <span class="material-symbols-rounded no-fill edit__ico">
                                        more_vert
                                    </span>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__red">
                                        Pendente
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__red">
                                        Pendente
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__red">
                                        Pendente
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__title">
                                <h5>Em Andamento</h5>
                                <div class="edit__card">
                                    <span class="material-symbols-rounded no-fill edit__ico">
                                        more_vert
                                    </span>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__orange">
                                        Em Andamento
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__orange">
                                        Em Andamento
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__orange">
                                        Em Andamento
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card__title">
                                <h5>Concluído</h5>
                                <div class="edit__card">
                                    <span class="material-symbols-rounded no-fill edit__ico">
                                        more_vert
                                    </span>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__green">
                                        Concluído
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__green">
                                        Concluído
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                            <div class="card__sticky">
                                <div class="description">
                                    <span class="reminder__label__green">
                                        Concluído
                                    </span>
                                    <p class="reminder__details">
                                        Descrição da Tarefa
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="card__btn">
                        <button>Adicionar</button>
                    </span>
                </div>
                <div class="card__wrapper">
                    <div class="card__title">
                        <h4>Notas Sticky</h4>
                        <div class="edit__card">
                            <span class="material-symbols-rounded no-fill edit__ico">
                                edit_square
                            </span>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Apresentação
                            </p>
                            <p class="reminder__details">
                                Auditório
                            </p>
                            <p class="reminder__details">
                                <span class="material-symbols-rounded agenda">
                                    calendar_month
                                </span>
                                2 Abril — ás 20:00 hrs
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Tomar Água
                            </p>
                            <p class="reminder__details">
                                <span class="material-symbols-rounded agenda">
                                    calendar_month
                                </span>
                                Agora
                            </p>
                        </div>
                    </div>
                    <div class="card__title">
                        <h4>Cronômetro</h4>
                        <div class="edit__card">
                            <span class="material-symbols-rounded no-fill edit__ico">
                                edit_square
                            </span>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                &#127876; Natal &#127876;
                            </p>
                            <p class="reminder__details">
                                Faltam 282 dias, 10 hrs, 36 minutos e 04 segundos para o Natal!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    } else if(screen == 'scholar'){
        tabela.innerHTML =
        `
        <div class="scholar__container">
            <h3 class="content__header">
                Meus Cursos
            </h3>
            <div class="scholar__content">
                <div class="card__wrapper">
                    <div class="card__title">
                        <h4>Téc. Informática para Internet</h4>
                        <div class="edit__card">
                            <span class="material-symbols-rounded no-fill edit__ico">
                                more_vert
                            </span>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 1
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 2
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 3
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 4
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <span class="card__btn">
                        <button>Download</button>
                    </span>
                </div>
                <div class="card__wrapper">
                    <div class="card__title">
                        <h4>Téc. Defesa Cibernética</h4>
                        <div class="edit__card">
                            <span class="material-symbols-rounded no-fill edit__ico">
                                more_vert
                            </span>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 1
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 2
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 3
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 4
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <span class="card__btn">
                        <button>Download</button>
                    </span>
                </div>
                <div class="card__wrapper">
                    <div class="card__title">
                        <h4>Técnico em Banco de Dados</h4>
                        <div class="edit__card">
                            <span class="material-symbols-rounded no-fill edit__ico">
                                more_vert
                            </span>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 1
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 2
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 3
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <div class="card__sticky">
                        <div class="description">
                            <p class="reminder__title">
                                Unidade Curricular 4
                            </p>
                            <p class="reminder__details">
                                Cronograma
                            </p>
                        </div>
                    </div>
                    <span class="card__btn">
                        <button>Download</button>
                    </span>
                </div>
            </div>
        </div>
        `
    }/* else if(){

    } else{
        aulasDoDia(new Date().getDate());
    }*/
}