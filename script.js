const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Culturalmente, em que é afetado na população brasileira?",
alternativas: [
{
texto: "Economia da sociedade e o número de necessitados",
afirmacao: "Em primeira analise, pode-se observar que com a desigualdade social alarmante ocorre a falta de lazer para o povo mais vulnerável, afetando assim a economia da cidade e o número de pessoas passando necessidades."
},
{
texto: "Alimentação e economia",
afirmacao: "Em primeira analise, pode-se observar que com a desigualdade social alarmante ocorre a falta de lazer para o povo mais vulnerável, afetando assim a economia da cidade e o número de pessoas passando necessidades."
}
]
},
{
enunciado: "Socialmente, qual é a principal classe social que mais sofre com a desigualdade?",
alternativas: [
{
texto: "População vulneravel e em situação de rua",
afirmacao: "Socialmente, existe o fato de que a desigualdade social afeta diretamente todo o cotidiano da população brasileira, desde um alimento até o deslocamento. Desse modo, deixando ainda mais vulnerável toda população."
},
{
texto: "Classe média para cima",
afirmacao: "Socialmente, existe o fato de que a desigualdade social afeta diretamente todo o cotidiano da população brasileira, desde um alimento até o deslocamento. Desse modo, deixando ainda mais vulnerável toda população."
}
]
},
{
enunciado: "Ambientalmente, quais pessoas tem mais oportunidade de cuidar do planeta? ",
alternativas: [
{
texto: "População desvavorecida",
afirmacao: "Em primeira instância, pode-se identificar que quando trata-se de uma população mais vulnerável, o termo reciclar ou semelhante, ocorre uma despreocupação."
},
{
texto: "População estável",
afirmacao: "Em primeira instância, pode-se identificar que quando trata-se de uma população mais vulnerável, o termo reciclar ou semelhante, ocorre uma despreocupação."
}
]

},
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Podemos concluir que...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
