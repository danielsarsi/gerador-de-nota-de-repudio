// sinônimos de 'repúdio'
const _inicios = [
    'abomino',
    'desprezo',
    'rechaço',
    'repudio',
    'rejeito',
    'desdenho',
    'deprecio',
    'condeno',
    'critico',
];

// advérbios que significam ímpeto, enérgicos
const _adverbios = [
    'veementemente',
    'fervorosamente',
    'totalmente',
    'energicamente',
    'absolutamente',
    'como um todo',
    'inteiramente',
    'integralmente',
    'plenamente',
    'completamente',
    'muito',
    'irrestritamente',
    'definitivamente',
    'terminantemente',
    'categoricamente',
    'indiscutivelmente',
    'taxativamente',
    'rigorosamente',
    'incondicionalmente',
    'permanentemente',
];

// algo do momento que foi repudiado, como deveria ser
const _repudios = [
    [
        'os ataques à Democracia brasileira',
        'a Democracia é estabelecida pela Constituição de 1988 e é, portanto, inegociável',
    ],
    [
        'o fechamento do Congresso e Supremo Tribunal Federal (STF)',
        'a República é composta, além do Executivo, pelo Legislativo e Judiciário',
    ],
    [
        'a retirada dos diretos trabalhistas',
        'devemos proteger os trabalhadores e garantir melhores condições de trabalho',
    ],
    [
        'o fim do isolamento social',
        'o isolamento é a única forma de conter o avanço do novo coronavírus',
    ],
    [
        'as declarações do Presidente da República',
        'reside uma imensa responsabilidade neste cargo, independente de quem o ocupa',
    ],
    [
        'as falas proferidas pelo deputado',
        'o respeito e a civilidade devem preponderar em qualquer embate de ideias',
    ],
    [
        'a ação da polícia militar',
        'a polícia deve estar do lado da população, em defesa pela vida',
    ],
    [
        'o projeto de Lei aprovado hoje',
        'o Legislativo deve trabalhar para responder aos interesses da população',
    ],
    [
        'o atraso na tramitação da proposta',
        'o processo deve seguir as normas da casa, como também ser ágil e efetivo',
    ],
    [
        'o episódio de violência noticiado',
        'a violência não é o caminho a ser tomado diante dos avanços civilizatórios',
    ],
    [
        'a destruição do meio ambiente',
        'precisamos conviver harmoniosamente com a natureza e respeitá-la',
    ],
    [
        'a decisão política do juiz',
        'o Judiciário deve se isentar da política como um poder independente',
    ],
    [
        'o ódio e a maldade',
        'o amor e a felicidade é o que faz nós, seres humanos, sermos cada vez mais humanos',
    ],
    [
        'o autoritarismo e a intolerância',
        'a Democracia e respeito às diferenças é consumada pela Constituição',
    ],
    [
        'a censura de ideias',
        'a liberdade de expressão, garantida pela Constituição, se opõe à opressão',
    ],
    [
        'as ações de teor religioso do Executivo',
        'o Estado deve permanecer laico e garantir a liberdade religiosa',
    ],
    [
        'os alagamentos causados pela chuva',
        'o plano diretor de uma cidade deve priorizar de escoamento de água em locais de grande concentração',
    ],
    [
        'as falas do Presidente da República no vídeo da reunião ministerial',
        'o líder do Executivo deve sustentar o decoro pertinente ao cargo',
    ],
    [
        'as palavras de baixo calão proferidas pelos membros do Executivo',
        'a comunicação humana deve se dar de forma respeitosa, considerando as regras de convivência',
    ],
    [
        'as tentativas de interferência na Polícia Federal',
        'a instituição em questão necessita de autonomia para atingir seus objetivos constitucionais',
    ],
];

// frases de efeito
const _efeitos = [
    'as instituições estão e continuarão funcionando normalmente',
    'não nos calarão',
    'o poder emana do povo',
    'seremos mais fortes diante destes ataques',
    'o estado democrático de direito resistirá',
    'trabalharemos incessantemente contra o obscurantismo',
    'lutaremos pelos direitos do povo brasileiro',
    'ditadura nunca mais',
    'a civilização vencerá a barbárie',
    'eles não passarão',
    'é hora de salvar o povo brasileiro',
    'não seremos responsáveis pela tragédia dessas ações',
    'é preciso calma e responsabilidade nesse momento',
    'é ultrajante que precisemos defender o óbvio',
    'não deixaremos os interesses do mercado vencer',
    'lutaremos incessantemente contra os retrocessos',
    'o bom senso sempre prevalecerá',
    'estaremos juntos pela Democracia',
    'a democracia e os brasileiros que querem paz vencerão',
    'que a Justiça seja célere para punir',
    'só quer o silêncio quem não quer a democracia',
    'não há dignidade na ausência de liberdade',
];

const _pontuacoes = ['.', '!'];

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

const app = (() => {
    const inicios = new CacheAleatorio(_inicios);
    const adverbios = new CacheAleatorio(_adverbios);
    const repudios = new CacheAleatorio(_repudios);
    const efeitos = new CacheAleatorio(_efeitos);
    const pontuacoes = new CacheAleatorio(_pontuacoes);

    const DOM = {
        botao: document.querySelector('#nova'),
        elemento: document.querySelector('#frase'),
    }

    const primeiraLetraMaiuscula = str => `${str[0].toUpperCase()}${str.substr(1)}`;

    const gerar = () => {
        const inicio = primeiraLetraMaiuscula(inicios.aleatorio());
        const adverbio = adverbios.aleatorio();
        const dupla = repudios.aleatorio();
        const repudiado = dupla[0];
        const sonho = primeiraLetraMaiuscula(dupla[1]);
        const efeito = primeiraLetraMaiuscula(efeitos.aleatorio());
        const pontuacao = pontuacoes.aleatorio();

        DOM.elemento.innerHTML = `${inicio} ${adverbio} ${repudiado}. ${sonho}. ${efeito}${pontuacao}`;
    }


    const addEventListeners = () => {
        DOM.botao.addEventListener('click', gerar);
    }

    const init = () => {
        gerar();
        addEventListeners();
    }

    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', app.init);
