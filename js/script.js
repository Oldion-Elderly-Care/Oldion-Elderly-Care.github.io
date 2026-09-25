/* Oldion — landing page
   Menu mobile acessivel, destaque da secao visivel e ano do rodape. */

(function () {
  'use strict';

  var botao = document.getElementById('botao-menu');
  var menu = document.getElementById('menu-principal');
  var links = menu ? menu.querySelectorAll('a') : [];

  /* ---------- Menu mobile ---------- */

  function menuAberto() {
    return botao.getAttribute('aria-expanded') === 'true';
  }

  function abrirMenu() {
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu de navegação');
    menu.classList.add('esta-aberto');
  }

  function fecharMenu(devolverFoco) {
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu de navegação');
    menu.classList.remove('esta-aberto');
    // So devolve o foco quando o fechamento veio do teclado; devolver apos um
    // clique em link roubaria o foco do destino recem-navegado.
    if (devolverFoco) botao.focus();
  }

  if (botao && menu) {
    botao.addEventListener('click', function () {
      if (menuAberto()) fecharMenu(false);
      else abrirMenu();
    });

    // Clicar num link fecha o painel antes de rolar ate a secao.
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        if (menuAberto()) fecharMenu(false);
      });
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && menuAberto()) fecharMenu(true);
    });

    // Clique fora fecha.
    document.addEventListener('click', function (evento) {
      if (!menuAberto()) return;
      if (menu.contains(evento.target) || botao.contains(evento.target)) return;
      fecharMenu(false);
    });

    // Ao voltar para a largura de desktop o painel deixa de existir como
    // sobreposicao; o estado precisa ser zerado para o aria nao mentir.
    var larguraDesktop = window.matchMedia('(min-width: 880px)');
    var aoMudarLargura = function (evento) {
      if (evento.matches && menuAberto()) fecharMenu(false);
    };
    if (larguraDesktop.addEventListener) larguraDesktop.addEventListener('change', aoMudarLargura);
    else larguraDesktop.addListener(aoMudarLargura);
  }

  /* ---------- Secao visivel destacada no menu ---------- */

  var secoes = document.querySelectorAll('main section[id]');

  if ('IntersectionObserver' in window && secoes.length && links.length) {
    var porId = {};
    links.forEach(function (link) {
      var alvo = link.getAttribute('href');
      if (alvo && alvo.charAt(0) === '#') porId[alvo.slice(1)] = link;
    });

    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          var link = porId[entrada.target.id];
          if (!link) return;
          if (entrada.isIntersecting) {
            links.forEach(function (outro) { outro.classList.remove('esta-ativo'); });
            link.classList.add('esta-ativo');
          }
        });
      },
      // A faixa estreita no meio da tela evita que duas secoes disputem o
      // destaque quando ambas estao parcialmente visiveis.
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    secoes.forEach(function (secao) { observador.observe(secao); });
  }

  /* ---------- Ano do rodape ---------- */

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = String(new Date().getFullYear());
})();
