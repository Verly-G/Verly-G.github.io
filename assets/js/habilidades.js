const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>PHP</p> <br> <p>O PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>C++</p> <br> <p>C++ é uma linguagem de programação compilada multi-paradigma e de uso geral. Sendo bastante usada também na academia por seu grande desempenho e base de utilizadores.</p><br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
                    (new Date(2021, 1, 1)).getTime(), // 0
                    (new Date(2021, 1, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 1, 1)).getTime(), // 6
                    (new Date(2021, 1, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    elemento.addEventListener('mouseover', () => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index]} </p>` ;
    } )
    elemento.addEventListener('mouseout', () => {
        descricao.innerHTML = 'Passe o mouse por cima de alguma habilidade para ler a descrição';
    } )
} );



