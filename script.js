// sinônimos de "repúdio"
const _inicios = [
  "abomino",
  "desprezo",
  "rechaço",
  "repudio",
  "rejeito",
  "desdenho",
  "deprecio",
  "condeno",
  "critico",
];

// advérbios que significam ímpeto, enérgicos
const _adverbios = [
  "veementemente",
  "fervorosamente",
  "totalmente",
  "energicamente",
  "absolutamente",
  "como um todo",
  "inteiramente",
  "integralmente",
  "plenamente",
  "completamente",
  "muito",
  "irrestritamente",
  "definitivamente",
  "terminantemente",
  "categoricamente",
  "indiscutivelmente",
  "taxativamente",
  "rigorosamente",
  "incondicionalmente",
  "permanentemente",
];

// algo do momento que foi repudiado, como deveria ser
const _repudios = [
  [
    "os ataques à Democracia brasileira",
    "a Democracia é estabelecida pela Constituição de 1988 e é, portanto, inegociável",
  ],
  [
    "o fechamento do Congresso e Supremo Tribunal Federal (STF)",
    "a República é composta, além do Executivo, pelo Legislativo e Judiciário",
  ],
  [
    "a retirada dos direitos trabalhistas",
    "devemos proteger os trabalhadores e garantir melhores condições de trabalho",
  ],
  [
    "o fim do isolamento social",
    "o isolamento é a única forma de conter o avanço do novo coronavírus",
  ],
  [
    "as declarações do Presidente da República",
    "reside uma imensa responsabilidade neste cargo, independente de quem o ocupa",
  ],
  [
    "as falas proferidas pelo deputado",
    "o respeito e a civilidade devem preponderar em qualquer embate de ideias",
  ],
  [
    "a ação da polícia militar",
    "a polícia deve estar do lado da população, em defesa pela vida",
  ],
  [
    "o projeto de Lei aprovado hoje",
    "o Legislativo deve trabalhar para responder aos interesses da população",
  ],
  [
    "o atraso na tramitação da proposta",
    "o processo deve seguir as normas da casa, como também ser ágil e efetivo",
  ],
  [
    "o episódio de violência noticiado",
    "a violência não é o caminho a ser tomado diante dos avanços civilizatórios",
  ],
  [
    "a destruição do meio ambiente",
    "precisamos conviver harmoniosamente com a natureza e respeitá-la",
  ],
  [
    "a decisão política do juiz",
    "o Judiciário deve se isentar da política como um poder independente",
  ],
  [
    "o ódio e a maldade",
    "o amor e a felicidade é o que faz nós, seres humanos, sermos cada vez mais humanos",
  ],
  [
    "o autoritarismo e a intolerância",
    "a Democracia e respeito às diferenças é consumada pela Constituição",
  ],
  [
    "a censura de ideias",
    "a liberdade de expressão, garantida pela Constituição, se opõe à opressão",
  ],
  [
    "as ações de teor religioso do Executivo",
    "o Estado deve permanecer laico e garantir a liberdade religiosa",
  ],
  [
    "os alagamentos causados pela chuva",
    "o plano diretor de uma cidade deve priorizar de escoamento de água em locais de grande concentração",
  ],
  [
    "as palavras de baixo calão proferidas pelos membros do Executivo",
    "a comunicação humana deve se dar de forma respeitosa, considerando as regras de convivência",
  ],
  [
    "as tentativas de interferência na Polícia Federal",
    "a instituição em questão necessita de autonomia para atingir seus objetivos constitucionais",
  ],
  [
    "a tentativa de censura à imprensa",
    "a liberdade de imprensa é um dos pilares da Democracia e deve ser respeitada",
  ],
  [
    "a falta de transparência nas ações do governo",
    "a transparência é fundamental para a confiança pública e a responsabilidade governamental",
  ],
  [
    "o ataque às instituições democráticas",
    "as instituições são essenciais para a manutenção do estado democrático de direito",
  ],
  [
    "a tentativa de deslegitimar o processo eleitoral",
    "o processo eleitoral garante a soberania popular e a legitimidade dos representantes eleitos",
  ],
];

// frases de efeito
const _efeitos = [
  "as instituições estão e continuarão funcionando normalmente",
  "não nos calarão",
  "o poder emana do povo",
  "seremos mais fortes diante destes ataques",
  "o estado democrático de direito resistirá",
  "trabalharemos incessantemente contra o obscurantismo",
  "lutaremos pelos direitos do povo brasileiro",
  "ditadura nunca mais",
  "a civilização vencerá a barbárie",
  "eles não passarão",
  "é hora de salvar o povo brasileiro",
  "não seremos responsáveis pela tragédia dessas ações",
  "é preciso calma e responsabilidade nesse momento",
  "é ultrajante que precisemos defender o óbvio",
  "não deixaremos os interesses do mercado vencer",
  "lutaremos incessantemente contra os retrocessos",
  "o bom senso sempre prevalecerá",
  "estaremos juntos pela Democracia",
  "a democracia e os brasileiros que querem paz vencerão",
  "que a Justiça seja célere para punir",
  "só quer o silêncio quem não quer a democracia",
  "não há dignidade na ausência de liberdade",
  "a luta pela democracia é a luta por um futuro melhor",
  "temos fé na justiça e na democracia",
  "mais uma vez, a democracia se mostra forte",
  "não podemos permitir que a barbárie vença",
  "precisamos de união e solidariedade",
  "urge a necessidade de bom senso e responsabilidade",
];

const _pontuacoes = [".", "!"];

// Nomes fictícios para o usuário
const _nomes = [
  "Deputado Democrático",
  "Senadora da República",
  "Vereador Progressista",
  "Prefeita Municipal",
  "Governador Estadual",
  "Ministro da Justiça",
  "Procurador Federal",
  "Defensor Público",
  "Presidente da Comissão",
  "Presidente do Senado",
  "Presidente da Câmara",
];

// Handles fictícios
const _handles = [
  "defensordemocrata",
  "lutapelojusto",
  "vozdobrasil",
  "justicasocial",
  "cidadaniaativa",
  "republicaforte",
  "constituicao88",
  "poderparaopovo",
  "brasildemocratico",
  "camarabr",
  "senadobr",
  "governobrasil",
  "justicabrasileira",
];

class CacheAleatorio {
  constructor(itens) {
    this.itens = itens.slice();
    this.usados = [];
    this.tamanho = this.itens.length;

    this.embaralhar(this.itens);
  }

  // https://stackoverflow.com/a/12646864
  embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  aleatorio() {
    if (this.usados.length === this.tamanho) {
      this.itens = this.usados;
      this.usados = [];

      this.embaralhar(this.itens);
    }

    const item = this.itens.shift();
    this.usados.push(item);
    return item;
  }
}

const inicios = new CacheAleatorio(_inicios);
const adverbios = new CacheAleatorio(_adverbios);
const repudios = new CacheAleatorio(_repudios);
const efeitos = new CacheAleatorio(_efeitos);
const pontuacoes = new CacheAleatorio(_pontuacoes);
const nomes = new CacheAleatorio(_nomes);
const handles = new CacheAleatorio(_handles);

function primeiraLetraMaiuscula(str) {
  return `${str[0].toUpperCase()}${str.substr(1)}`;
}

function formatarNumero(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
  } else if (num >= 10000) {
    return (num / 1000).toFixed(0) + 'K';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.0', '') + 'K';
  }
  return num.toString();
}

function atualizarNumeroComAnimacao(selector, novoValor) {
  const element = document.querySelector(selector);
  const valorAtual = element.textContent;
  const valorNovo = formatarNumero(novoValor);

  // Se o valor não mudou, não animar
  if (valorAtual === valorNovo) return;

  // Adicionar classe de saída ao elemento atual
  element.classList.add('leaving');

  const wrapper = element.parentElement;
  const novoSpan = document.createElement('span');
  novoSpan.textContent = valorNovo;
  novoSpan.className = selector.replace('.', '') + ' entering';

  // Remover spans antigos após a animação
  setTimeout(() => {
    const oldSpans = wrapper.querySelectorAll('span.leaving');
    oldSpans.forEach(span => span.remove());
  }, 400);

  wrapper.appendChild(novoSpan);
}

function formatarHora() {
  const agora = new Date();
  const horas = agora.getHours();
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const periodo = horas >= 12 ? 'PM' : 'AM';
  const hora12 = horas % 12 || 12;

  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
  const dia = agora.getDate();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();

  return `${hora12}:${minutos} ${periodo} · ${dia} de ${mes} de ${ano}`;
}

function gerar() {
  const elemento = document.querySelector("#tweet-text");

  const inicio = primeiraLetraMaiuscula(inicios.aleatorio());
  const adverbio = adverbios.aleatorio();

  const dupla = repudios.aleatorio();
  const repudiado = dupla[0];
  const sonho = primeiraLetraMaiuscula(dupla[1]);

  const efeito = primeiraLetraMaiuscula(efeitos.aleatorio());
  const pontuacao = pontuacoes.aleatorio();

  const frase = `${inicio} ${adverbio} ${repudiado}. ${sonho}. ${efeito}${pontuacao}`;
  elemento.innerHTML = frase;

  // Atualizar nome e handle
  const nome = nomes.aleatorio();
  const handle = handles.aleatorio();
  document.querySelector(".user-name").innerHTML = `${nome} <span class="verified"></span>`;
  document.querySelector(".user-handle").textContent = `@${handle}`;

  // Atualizar inicial do avatar
  document.querySelector(".avatar").textContent = nome.charAt(0);

  // Atualizar timestamp
  document.querySelector(".tweet-time").textContent = formatarHora();

  // Gerar números aleatórios para interações (com chance de números maiores)
  const multiplicador = Math.random() < 0.1 ? 1000 : 1; // 10% de chance de ser viral
  const replies = Math.floor(Math.random() * 50 * multiplicador) + 1;
  const retweets = Math.floor(Math.random() * 200 * multiplicador) + 10;
  const likes = Math.floor(Math.random() * 500 * multiplicador) + 20;

  // Atualizar números iniciais sem animação
  document.querySelector(".replies-count").textContent = formatarNumero(replies);
  document.querySelector(".retweets-count").textContent = formatarNumero(retweets);
  document.querySelector(".likes-count").textContent = formatarNumero(likes);

  // Retornar valores iniciais para uso no incremento
  return { replies, retweets, likes };
}


let currentStats = gerar();
let incrementInterval;

function agendarProximoIncremento() {
  // Base de 3 segundos + jitter aleatório entre -1000ms e +2000ms
  const baseDelay = 3000;
  const jitter = Math.floor(Math.random() * 3000) - 1000;
  const proximoDelay = baseDelay + jitter;

  incrementInterval = setTimeout(() => {
    incrementarInteracoes();
    agendarProximoIncremento();
  }, proximoDelay);
}

function incrementarInteracoes() {
  // Incrementar cada métrica com probabilidades diferentes
  if (Math.random() < 0.3) { // 30% de chance de novo reply
    currentStats.replies += 1;
  }
  if (Math.random() < 0.5) { // 50% de chance de novo retweet
    currentStats.retweets += Math.floor(Math.random() * 3) + 1;
  }
  if (Math.random() < 0.7) { // 70% de chance de novas curtidas
    currentStats.likes += Math.floor(Math.random() * 5) + 1;
  }

  // Atualizar os contadores na tela com animação
  atualizarNumeroComAnimacao(".replies-count", currentStats.replies);
  atualizarNumeroComAnimacao(".retweets-count", currentStats.retweets);
  atualizarNumeroComAnimacao(".likes-count", currentStats.likes);
}

const botao = document.querySelector("#nova");
botao.addEventListener("click", function () {
  currentStats = gerar();
  // Limpar timeout anterior e criar novo
  if (incrementInterval) {
    clearTimeout(incrementInterval);
  }
  agendarProximoIncremento();
});

// Iniciar incremento automático
agendarProximoIncremento();