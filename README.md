# Oldion — Landing Page

Landing page de apresentação do **Oldion**, sistema de acompanhamento de medicamentos e rotina para
pessoas idosas. Desenvolvida para a disciplina de **Programação Web III — AMS**.

🔗 **Página publicada:** https://oldion-elderly-care.github.io/

---

## Sobre o projeto

O Oldion é um sistema de cuidado composto por um aplicativo mobile e uma API própria. Ele organiza
os medicamentos de uma pessoa idosa, registra o que foi realmente tomado e mantém a rede de cuidado
— familiares e cuidadores — informada, usando recursos nativos do aparelho.

### Problema

A adesão ao tratamento cai conforme o número de medicamentos aumenta. Dose esquecida, dose repetida
e horário trocado são rotina para quem toma quatro ou mais remédios por dia. O controle costuma ser
feito de cabeça, em caderno ou em caixinha semanal — e nenhum deles registra o que foi tomado nem
avisa quem está de fora. Quando acontece uma queda ou uma emergência, o aviso depende de alguém
estar por perto.

### Solução

O Oldion substitui a memória por registro e a ligação de checagem por histórico compartilhado:

1. **Cadastre a prescrição** — remédio, dose e horários; o app gera as ocorrências de cada dia.
2. **Confirme a dose** — um toque, com foto opcional pela câmera como comprovação.
3. **Quem cuida acompanha** — o cuidador vinculado vê histórico, localização e alertas de queda.

### Público-alvo

- **Pessoas idosas em uso contínuo de medicamentos**, que querem autonomia na própria rotina, com
  texto grande, toque simples e funcionamento sem internet.
- **Familiares e cuidadores**, que precisam acompanhar à distância sem vigiar.

---

## Identidade visual

### Logotipo

O logotipo é um wordmark em que o traço que sublinha a palavra "Oldion" se curva na ponta e vira uma
**bengala** — o cuidado que dá apoio sem tirar a autonomia. Desenhado pela equipe em SVG, o que
mantém o traço nítido em qualquer tamanho de tela.

| Arquivo | Uso |
| --- | --- |
| [`img/logo.svg`](img/logo.svg) | Logotipo horizontal completo |
| [`img/logo-mark.svg`](img/logo-mark.svg) | Símbolo isolado (apenas a bengala) |
| [`img/favicon.svg`](img/favicon.svg) | Ícone da aba do navegador |

### Paleta de cores

A landing page usa a mesma paleta do aplicativo, mantendo a identidade consistente entre produto e
apresentação.

| Papel | Hex | Uso |
| --- | --- | --- |
| Cor principal | `#6F2B9D` | Botões, links, logotipo |
| Cor secundária | `#4A1C6B` | Fundo do hero e da chamada |
| Cor de destaque | `#0D9488` | Ícones, bordas, indicadores |
| Cor de fundo | `#FAF8FD` | Fundo geral da página |
| Cor de texto | `#1F152B` | Texto corrido e títulos |

Cores de apoio: superfície `#FFFFFF`, superfície alternativa `#F3EAFC`, texto secundário `#6E6180`,
borda `#E6DDF0`.

> **Nota de contraste:** a cor de destaque `#0D9488` atinge 3,7:1 sobre branco, abaixo do mínimo AA
> para texto pequeno. Por isso ela é usada apenas em ícones, bordas e indicadores — nunca em texto
> corrido. A cor principal `#6F2B9D` atinge 8,4:1 sobre branco e é usada livremente.

### Tipografia

| Papel | Fonte | Pesos |
| --- | --- | --- |
| Títulos | [Outfit](https://fonts.google.com/specimen/Outfit) | 600, 700 |
| Textos | [Inter](https://fonts.google.com/specimen/Inter) | 400, 500 |

O corpo de texto usa **18px** como tamanho base, e não os 16px habituais. Sendo um produto voltado a
pessoas idosas, a legibilidade é parte da identidade, não um detalhe de estilo.

---

## Equipe

| Integrante | Função / responsabilidade |
| --- | --- |
| **Murilo Monteiro Zanetti** | Backend, frontend, dados e hardware |
| **Felipe Torres González** | Frontend |
| **Murilo Duarte Carpinedo** | Design |

---

## Tecnologias

### Esta landing page

- **HTML5 semântico** — `header`, `nav`, `main`, `section`, `article`, `footer`
- **CSS3** — Grid, Flexbox, custom properties e `clamp()` para tipografia fluida
- **JavaScript** — menu mobile acessível e destaque da seção visível (`IntersectionObserver`)
- **GitHub Pages** — hospedagem

Sem framework e sem etapa de build: a página é servida exatamente como está no repositório.

### Projeto Oldion

| Camada | Tecnologias |
| --- | --- |
| Aplicativo | React Native 0.86, Expo SDK 57, React Navigation 7, AsyncStorage, expo-location, expo-sensors, expo-image-picker, expo-contacts |
| API | Node.js 20, Express 5, Sequelize 6, PostgreSQL, JWT, bcrypt, Zod, Pino |
| Infraestrutura | Docker Compose, Jest, ESLint, Prettier, GitHub Actions |

---

## Estrutura de arquivos

```
Oldion-Elderly-Care.github.io/
├── index.html          # Página única com as seções de apresentação
├── css/
│   └── style.css       # Tokens da identidade, layout e responsividade
├── js/
│   └── script.js       # Menu mobile, seção ativa e ano do rodapé
├── img/
│   ├── logo.svg
│   ├── logo-mark.svg
│   ├── favicon.svg
│   └── app/
│       └── tela-alarmes.svg
├── .nojekyll
└── README.md
```

---

## Acessibilidade

- HTML semântico com hierarquia de títulos sem saltos e um único `<h1>`
- Link "Pular para o conteúdo" como primeiro elemento focável
- Menu mobile operável por teclado, com `aria-expanded` e fechamento por `Esc`
- Foco visível (`:focus-visible`) em todos os links e botões
- Textos alternativos em imagens de conteúdo; ícones decorativos com `aria-hidden`
- Alvos de toque de no mínimo 48px
- `prefers-reduced-motion` respeitado
- `lang="pt-BR"` declarado

## Responsividade

Testada sem rolagem horizontal, cortes ou sobreposições em 320px, 375px, 768px, 1024px e 1440px,
além de celular em orientação paisagem — caso em que o menu aberto rola internamente em vez de
estourar a tela. As grades usam `repeat(auto-fit, minmax(...))`, reorganizando de 3 para 2 e para 1
coluna conforme o espaço disponível.

---

## Como executar localmente

Por não haver etapa de build, basta abrir o `index.html` no navegador. Para servir por HTTP:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

---

## Projeto relacionado

O código do aplicativo e da API está em
[Oldion-Elderly-Care/Oldion_Elderly_Care](https://github.com/Oldion-Elderly-Care/Oldion_Elderly_Care).

## Contato

oldion811@gmail.com
