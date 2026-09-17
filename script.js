<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Você decide o futuro da I.A.</title>
  </head>
<body>
  <div class="caixa-principal">
    <h1>Você decide o futuro da IA</h1>
    <div class="caixa-perguntas"></div>
    <div class="caixa-alternativas"></div>
    <div class="caixa-resultado">
        <p class="texto-resultado"></p>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
const perguntas = [
    {
        enunciado: "O cyberbullying é a violência virtual que ocorre geralmente com as pessoas tímidas e indefesas, ou simplesmente por não caírem na simpatia das mesmas. Como podemos evitá-lo",
        alternativas: [
            {
                texto: "Utilizando palestras para prevenir o cyberbullying nas escolas.",
                afirmacao: [
                    "Você é uma pessoa reflexiva e busca aprendizado e conhecimento.",
                "Sua capacidade de perceber os detalhes mostra o quanto você se dedica ao cuidado e ao acolhimento dos seus estudantes."
            ]
            },
            {
                texto:  "Prestando atenção aos sinais de cyberbullying nas escolas.",
                afirmacao: [
                    "Você é uma pessoa observadora, pois se preocupa com o bem estar dos seus alunos."
                    "Sua capacidade de captar o clima da sala revela uma sensibilidade rara de quem educa com o coração."
                ]
            }    
           
        ]
    },
    {
        mostraResultado();
       
            enunciado: "As fontes renováveis de energia são aquelas formas de produção de energia em que suas fontes são capazes de manter-se disponíveis durante um longo prazo, contando com recursos que se regeneram ou que se mantêm ativos permanentemente. Com base nisso, temos a energia geotérmica, que consiste em utilizar o calor manifestado em áreas próximas à superfície. Qual a sua opinião sobre esse modelo de energia renovável?",
            alternativas: [
                {
                    texto: "A energia geotérmica precisa ser mais explorada visto que utiliza o calor interno da terra, pois não depende do clima e é inesgotável.",
                    afirmacao: [
                        "Você demonstra um perfil  de pesquisador e inovador que busca por meio da inovação soluções para o meio ambiente e sustentabilidade das gerações posteriores."
                        "Seu espírito investigativo e inovador é focado em criar soluções que garantam a preservação ambiental para as próximas gerações."
                    ]
                },
                {
                    texto:  "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. ",
                    afirmacao: [
                        "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                    "Você possui uma visão estratégica que alia a otimização de custos à preservação ambiental, provando que sustentabilidade e lucro andam juntos."
                ]
                }    
               function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: [
                        "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                        "Demonstra alta inteligência emocional, dedicando-se a cultivar uma autoimagem saudável e uma mentalidade focada no bem-estar."
                    ]
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: [
                        "Você demostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                    "Você está vivendo um momento de despertar, reconhecendo que investir no seu autoconhecimento e na sua saúde mental se tornou uma prioridade urgente."
                ]
               
            ]
        },
]
let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}
function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
