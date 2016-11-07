# DZ Coding Style
Este documento define a formatação e regras de escrita dos códigos **HTML, CSS** e **JS** na DZ. Tem como objetivo melhorar o trabalho colaborativo, a qualidade do código e servir como suporte para novos colaboradores.

- [Receitas](recipes)
- [Regras Gerais](#regras-gerais)
	- [Indentação](#indentação)
	- [Espaços em Branco](#espaços-em-branco)
	- [Nomenclatura](#nomenclatura)
	- [Comprimento da Linha](#comprimento-da-linha)
	- [Protocolos](#protocolos)
- [CSS / Preprocessadores](scss-css)
- [JavaScript](javascript)
- [Email marketing](email-marketing)
- [Acessibilidade](accessibility)
- [Performance](performance)
- [Ferramentas Úteis](#ferramentas-%C3%9Ateis)
- [TODO](#todo)
- [Referências](#referências)

## Editores de texto
Os editores recomendados para uso são [Sublime Text](https://www.sublimetext.com/) e [Atom](https://atom.io/). Configurações recomendadas para ambos os editores estão disponíveis nas [receitas](recipes).

## Regras que DEVEM ser validadas automaticamente
As regras a seguir **devem** ser validadas automaticamente instalando o plugin [editorconfig](http://editorconfig.org/) para o seu editor de texto e utilizando o [arquivo editorconfig disponível nas receitas](recipes/editorconfig-settings) na raiz do projeto.

### Indentação
Utilizar **2 espaços** para indentação. Para arquivos .php e .py, esse número é de 4 espaços.

### Espaços em branco
Remover espaços em branco em linhas sem código e ao final da linha (trailing whitespace).

### Charset do arquivo
O charset padrão dos arquivos deve ser **UTF-8**.

### Quebra de linha
Padrão LF (unix).

### Nova linha ao final dos arquivos
Uma nova linha em branco deve ser inserida ao final dos arquivos.


## Regras Gerais

### Nomenclatura
Nomes de variáveis, funções e outros devem ser sempre escritos em inglês (com exceção dos hash)

### Comprimento da linha
Manter média de 80 caracteres por linha ou menos.

### Protocolos
**Nunca** omitir o protocolo de URLs absolutas que apontem para imagens e outros arquivos de mídia, folhas de estilo e scripts. Dar preferência para https se o recurso está disponível neste protocolo.

```html
<!-- Not recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

<!-- Recommended -->
<script src="https://www.google.com/js/gweb/analytics/autotrack.js"></script>
```

```css
/* Not recommended */
.example {
  background: url(//www.google.com/images/example);
}

/* Recommended */
.example {
  background: url(https://www.google.com/images/example);
}
```

### Capitalização
Utilizar **sempre** texto em caixa baixa.

```html
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">
```

```css
/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```

### Validação de Código
Utilizar validadores da W3C para identificar possíveis **erros comuns**.

* [Validador html](http://validator.w3.org/)
* [Validador css](http://jigsaw.w3.org/css-validator/)

### Use o melhor formato de imagem disponível para a tarefa
A quantidade de cores, transparência, tamanho e animação influenciam na escolha correta entre **SVG, GIF, JPG** e **PNG**. Escolha corretamente para cada um dos casos:

* Ícones e vetores com poucas cores sólidas ou apenas uma cor: SVG.
* Fotos e ilustrações com diversas cores: utilizar JPG (progressivo).
* Imagens com fundo transparente: utilizar PNG-24.
* Imagens com poucas cores (menos de 128): utilizar PNG-8.
* Imagens animadas: utilizar GIF, ou MP4 - comparar tamanho final de cada arquivo.

### Nomes de arquivos
* Usar apenas letras minúsculas alfabéticas, sem acentuação.
* Usar hífens para separar palavras no nome do arquivo. Ex.: `logo-home.png`.
* Dividir arquivos de imagem em pastas conforme a complexidade / escalabilidade do projeto.
* Nomes descritivos. Ex.: `cachorro-sentado.jpg`, `titulo-home.jpg`, `banner-dia-dos-namorados.png`.

### Testes cross-browser
Teste no maior número de navegadores e dispositivos possível. A ferramenta padrão utilizada utilizada para isso é o [Browserstack](https://www.browserstack.com/).
A linha de corte mínima é:

* Última versão de navegadores desktop modernos: Safari, Chrome, Firefox, IE / Edge;
* Internet Explorer 9 e posteriores. Suporte para IE8- deve ser decidido baseado em métricas do **Google Analytics**;
* Android >4: Chrome, Opera, Firefox.
* IOS (iPhone e iPad): Safari e Chrome.

## Ferramentas Úteis
* [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [Can I Use](http://caniuse.com/)
* [HTML5please](http://html5please.com/)

## todo
* Definir uma maneira de respeitar o maior número de regras possível **automaticamente**.

## Referências
* https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
* http://isobar-idev.github.io/code-standards/
* http://www.bbc.co.uk/guidelines/futuremedia/technical/semantic_markup.shtml
* http://code.tutsplus.com/tutorials/30-css-best-practices-for-beginners--net-6741
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS
* http://cssguidelin.es/
* https://github.com/ginatrapani/ThinkUp/wiki/Code-Style-Guide
* https://litmus.com/blog/background-colors-html-email
* http://pt.wikipedia.org/wiki/JavaScript
* https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault
* http://api.jquery.com/event.preventdefault/
* http://specialmoves.github.io/coding-standards-front-end/
* https://github.com/forio/front-end-code-standards
* http://taitems.github.io/Front-End-Development-Guidelines/
