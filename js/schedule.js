const today = new Date();

const url = new URL(window.location.href);
const main = document.getElementsByTagName('main')[0];
const Config = {
    Dias: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
    DiaDaSemana: today.getDay(), 
    Dia: GetDia(today.getDay()),
    hora: today.toLocaleTimeString().substring(0,5),
    Turma: '',


}

const horario = ['08:25', '09:15', '10:35', '11:25', '12:25', '13:30', '14:20', '15:40', '16:30', '17:20', '18:20'];

const cal = [
    ['', '', '', '', '', '', '', '', '', '',],
    ['', '', '', '', '', 'Português', 'Português', 'Ed. Física', 'CoAdjM / Matemática', 'Françês'],
    ['', 'Ap. Port', 'Ed. Física', 'Ing/Port', 'Françês', '', 'Geografia', 'Físico Química', 'Ing/Port', ''],
    ['Físico Química', 'Ciências Naturais', 'Ed. Visual', 'Ed. Visual', '', 'História', 'Cidadania', 'Musica/TIC', 'Ap. Tut. Esp.', ''],
    ['Françês', 'Português', 'Inglês', 'Matemática', '', 'Ciências Naturais', 'Ciências Naturais', 'Ap. Tut. Esp.','Ap. Tut. Esp.', ''],
    ['Matemática', 'Matemática', 'Ciências Naturais', 'Musica/TIC', '', 'Geografia', 'História', 'Ed. Física', 'EMRC', ''],
    ['', '', '', '', '', '', '', '', '', '',]
];


if (url.searchParams.has('turma')) {
    Config.Turma = url.searchParams.get('turma');
    if (url.searchParams.has('ndia')) {
        Config.DiaDaSemana = url.searchParams.get('ndia');
        Config.Dia = GetDia(Config.DiaDaSemana)
    }
    CreateSchedule();
    console.log('The query parameter is set');
} else {
    console.log('The query parameter is not set');
}



// ##########################################

function CreateSchedule() {
    let day = document.createElement('div');
    let title = document.createElement('h3');
    title.textContent = `${Config.Turma} - ${Config.Dia}`
    day.appendChild(title)
    main.appendChild(day)
    let dia = document.createElement('div')
    for (let index = 0; index < horario.length; index++) {
        //const element = array[index];
        let periodo = document.createElement('div')
        let hora = document.createElement('span')
        let aula = document.createElement('span')
        hora.textContent = horario[index]
        hora.classList.add('hora')
        aula.textContent = cal[Config.DiaDaSemana][index]
        aula.title = aula.textContent
        aula.classList.add('aula')
        periodo.classList.add('periodo')
        periodo.append(hora, aula)
        dia.append(periodo)
        
    }
    main.appendChild(dia)
}

function GetDia(numDia) {
    if (isNaN(numDia))
        return;

    numDia = parseInt(numDia);
    let dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    return dias[numDia];
}