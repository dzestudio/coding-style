# coding-style
Este documento define a formatação e regras de escrita dos códigos **HTML, CSS** e **JS** na DZ. Tem como objetivo melhorar o trabalho colaborativo, a qualidade do código e servir como suporte para novos colaboradores.

- [Regras Gerais](#regras-gerais)
	- [Indentação](#indentação)
	- [Espaços em Branco](#espaços-em-branco)
	- [Nomenclatura](#nomenclatura)
	- [Comprimento da Linha](#comprimento-da-linha)
	- [Protocolos](#protocolos)
- [html](#html)
	- [Formatação](#formatação)
	- [Doctype](#doctype)
	- [Codificação](#codificação)
	- [Viewport](#viewport)
	- [Previnir Modo de Compatiblidade do IE](#previnir-modo-de-compatibilidade-do-ie)
	- [Atributos Type](#atributos-type)
	- [Comentários](#comentários)
	- [Itens de Ação](#itens-de-ação)
	- [Títulos](#títulos)
	- [Listas](#listas)
	- [Formulários](#formulários)
	- [Tabelas](#tabelas)
- [css](#css)
	- [Regras Gerais](#regras-gerais)
	- [Formatação](#formatação-1)
	- [Ordenamento de Propriedades](#ordenamento-de-propriedades)
	- [Preprocessadores (Less, Sass, ...)](#preprocessadores-less-sass-)
	- [Seletores](#seletores)
	- [IDs e Classes](#ids-e-classes)
	- [Nomenclatura BEM (Bloco, Elemento, Modificador](#nomenclatura-bem-bloco-elemento-modificador)
	- [Organização](#organização)
	- [Comentários](#comentários-1)
- [js](#js)
	- [Variáveis](#variáveis)
	- [Comentários](#comentários-2)
	- [Use Espaços em Branco](#use-espaços-em-branco)
	- [PreventDefault](#preventdefault)
	- [Outras Recomendações](#outras-recomendações)
- [Ferramentas Úteis](#ferramentas-%C3%9Ateis)
- [TODO](#todo)
- [Referências](#referências)

## Regras Gerais
### Indentação
Configure seu editor para utilizar **4 espaços** de indentação.

### Espaços em branco
Remover espaços em branco em linhas sem código e ao final da linha (trailing whitespace).

### Nomenclatura
Nomes de variáveis, funções e outros devem ser sempre escritos em inglês (com exceção dos hash)

### Comprimento da linha
Manter média de 80 caracteres por linha ou menos.

### Protocolos
Omitir o protocolo de URLs que apontem para imagens e outros arquivos de mídia, folhas de estilo e scripts, a menos que os respectivos arquivos não estejam disponíveis em algum dos protocolos.

Omitir o protocolo (tornar a URL relativa) previne problemas de compatibilidade e resulta em arquivos finais de **melhor performance**.

```html
<!-- Not recommended -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>

<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

```css
/* Not recommended */
.example {
  background: url(http://www.google.com/images/example);
}

/* Recommended */
.example {
  background: url(//www.google.com/images/example);
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
A quantidade de cores, transparência, tamanho e animação influenciam na escolha correta entre **GIF, JPG** e **PNG**. Escolha corretamente para cada um dos casos:

* Fotos e ilustrações com diversas cores: utilizar JPG (progressivo).
* Imagens com fundo transparente: utilizar PNG-24.
* Imagens com poucas cores (menos de 128): utilizar PNG-8.
* Imagens animadas: utilizar GIF, ou PNG se houver suporte.

### Nomes de arquivos
* Usar apenas letras minúsculas alfabéticas, sem acentuação.
* Usar hífens para separar palavras no nome do arquivo. Ex.: `logo-home.png`.
* Dividir arquivos de imagem em pastas conforme a complexidade / escalabilidade do projeto.
* Nomes descritivos. Ex.: `cachorro-sentado.jpg`, `titulo-home.jpg`, `banner-dia-dos-namorados.png`.

### Testes cross-browser
Teste no maior número de navegadores e dispositivos possível. A linha de corte mínima é:

* Última versão de navegadores desktop modernos: Safari, Chrome, Firefox, Opera;
* Internet Explorer 8 e posteriores. Suporte para IE7 deve ser decidido baseado em métricas do **Google Analytics**;
* Android 2.x: Navegador padrão, Opera, Firefox.
* Android >4.x: Chrome, Opera, Firefox.
* IOS (iPhone e iPad): Safari e Chrome.

## HTML
### Formatação
* Utilizar uma nova linha para cada elemento de bloco, lista ou tabela e indentar todo elemento filho.
* Atributos devem sempre ter valores entre aspas duplas.
* Atributos booleanos não precisam de valores.
* Elementos self-closing (`<br>`, `<input>`, `<img>`, etc) não precisam de `/` no final. 

``` html
<input type="checkbox" checked>

<blockquote>
    <p><em>Space</em>, the final frontier.</p>
</blockquote>

<ul>
    <li>Moe</li>
    <li>Larry</li>
    <li>Curly</li>
</ul>

<table>
    <thead>
        <tr>
            <th scope="col">Income</th>
      	    <th scope="col">Taxes</th>
	    </tr>
    </thead>
    <tfoot>
        <tr>
            <td>$ 5.00
      		<td>$ 4.50
        </tr>
    </tfoot>
    <tbody>
        <tr>
      	    <td>$ 5.00
      		<td>$ 4.50
      	</tr>
    </tbody>
</table>
```

### Doctype
Utilizar Doctype do **html 5**

`<!doctype html>`

### Codificação
Usar **UTF-8 (no BOM)**

`<meta charset="utf-8">`

### Viewport
Utilize a metatag viewport padrão a seguir. Caso seja necessário, pode-se utilizar o parâmetro opcional `user-scalable=no` para evitar que os usuários usem o *"pinch-n-zoom"*.

Caso os valores padrão sejam alterados, lembre de alterá-los na regra `@viewport` no **CSS**.
`<meta name="viewport" content="width=device-width, initial-scale=1">`

### Previnir Modo de Compatibilidade do IE
Algumas vezes o navegador **IE** pode entrar indesejavelmente em **Modo de Compatibilidade**. Para prevenir este comportamento, utilizar a meta tag:

`<meta http-equiv="x-ua-compatible" content="ie=edge">`

### Atributos Type
Omitir os atributos `type` para **CSS** e **Javascript**. Isto pode ser feito com segurança no **html 5** e não gera problemas em navegadores antigos.

```html
<!-- Not recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css" type="text/css">

<!-- Recommended -->
<link rel="stylesheet" href="//www.google.com/css/maia.css">

<!-- Not recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js" type="text/javascript"></script>

<!-- Recommended -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>
```

### Comentários
Utilizar comentários que auxiliem na compreensão dos elementos como cabeçalhos, sidebars e seções do documento.

```html
<!-- Example -->
<div class="example">
    <p>Content</p>
</div>
```

### Itens de Ação
Marcar com `TODO` seguido de um texto informativo os itens que necessitam ser finalizados.

```html
<!-- TODO: remove optional tags -->
<ul>
    <li>Apples</li>
    <li>Oranges</li>
</ul>
```

### Títulos
* Todas as páginas devem conter elementos de título e respeitar a ordem hierárquica de níveis entre os mesmos (`h1`, `h2`, `h3`...).
* O `h1` deve aparecer somente uma vez por página. Na **home**, pode ser utilizado junto a **marcação do logotipo**. Nas internas, deve ser utilizado no **assunto principal** da página.

### Listas
* Itens de lista devem sempre estar dentro de elementos `ul`, `ol` ou `dl`. Nunca dentro de `div`, `p`, ou demais elementos.
* As listas devem ser utilizadas semanticamente: `ul` para itens onde a ordem não tem importância, `ol` para itens ordinais e `dl` para listas com termos de definição e suas definições.

### Formulários
Utilizar `label` para cada campo do formulário com atributo for associado ao campo correspondente (estilizar o label com cursor: pointer é uma boa prática).

Se não existir `label`, utilizar o atributo `title` no elemento.

```html
<label for="apple">apple</label><input id="apple">
```
ou
```html
<input id="apple" title="apple">
```

Caso o campo esteja inserido dentro de um elemento `label`, não há necessidade de declarar o atributo `for`.

```html
<label>apple <input id="apple"></label>
```

Para grupos de campos múltipla escolha (radio buttons, checkbox), criar um elemento `fieldset` com um `legend` descritivo do grupo.

```html
<fieldset>
    <legend>Gênero</legend>
    <label>Masculino <input type="radio"></label>
    <label>Feminino <input type="radio"></label>
</fieldset>
```

### Tabelas
Nunca utilizar tabelas para layout da página (a não ser em newsletters e emails marketing). Tabelas são apropriadas para **dados tabulares**.

Fazer uso das tags `thead`, `tfoot` e `tbody` e `th` (e atributo `scope`) quando apropriado.

```html
<table summary="This is a chart of year-end returns for 2005.">
    <thead>
        <tr>
            <th scope="col">Table header 1</th>
            <th scope="col">Table header 2</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>Table foot 1</td>
            <td>Table foot 2</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>Table data 1</td>
            <td>Table data 2</td>
        </tr>
    </tbody>
</table>
```

## CSS
### Regras Gerais
* Não utilizar **CSS inline** no documento.
* Utilizar declarações em **shorthand**.
* Declarar cores em hexadecimal de **3 dígitos** sempre que possível (em **newsletters** utilizar sempre **6 dígitos**).
* Utilizar **image sprites** sempre que possível.
* Utilizar unidades em `px` (inclusive fontes) e `line-height` sem unidade definida.

### Formatação
Utilizar múltiplas linhas, espaçamento entre seletor e abertura de chave e indentação conforme o exemplo

```css
.icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url(/img/sprite.svg);
}
```

Em casos onde o seletor tenha apenas apenas uma propriedade, a declaração pode ser escrita em uma linha:

```css
.icon--home     { background-position: 0 0; }
.icon--person   { background-position: -16px 0; }
.icon--files    { background-position: 0 -16px; }
.icon--settings { background-position: -16px -16px; }
```

Utilizar nova linha para declaração de múltiplos seletores que compartilhem as mesmas propriedades:

```css
.selector-a,
.selector-b {
    padding: 10px;
}
```

O mesmo para propriedades que possam ter mais de um valor atribuído (e que não sejam **shorthands**).

```css
.selector {
    background-image:
        linear-gradient(#fff, #ccc),
        linear-gradient(#f3c, #4ec);
    box-shadow:
        1px 1px 1px #000,
        2px 2px 1px 1px #ccc inset;
}
```

### Ordenamento de Propriedades
Procurar declarar as propriedades na seguinte ordem:

1. Posicionamento
2. Apresentação e Modelo
3. Outras

```css
.selector {
    /* Positioning */
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    /* Display & Box Model */
    display: inline-block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid #333;
    margin: 10px;

    /* Other */
    background: #000;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    text-align: right;
}
```

### Preprocessadores (Less, Sass, …)
* Tentar limitar aninhamentos para no máximo um nível de profundidade.
* Usar `@extend` e `@include` respectivamente nas linhas iniciais de declaração das propriedades, seguido do restante das declarações para o elemento.
* Utilizar **vendor attributes** (`box-shadow`, `text-shadow`, `border-radius`) sem os **vendor prefixes** ao final da declaração das propriedades - pois essas serão manipuladas pelo **autoprefixer**.

```css
.selector-1 {
    @extend .other-rule;
    @include clearfix();
    width: x-grid-unit(1);
    // other declarations
    box-shadow: 0 1px 0 rgba(0,0,0,.3);
}
```

### Seletores
Evitar regras de seletores universais

```css
[hidden="true"] {…} /* A universal rule */  
* {…}		/* A universal rule */
tree > [collapsed="true"] {…} /* A universal rule */
```

Não qualificar o seletor.

```css
/* Not recommended */
ul.nav-primary {…}

/* Recommended */
.nav-primary {…}
```

### IDs e Classes
* Utilizar **IDs** apenas para elementos estruturais que não se repetem na página ou como **referências para âncoras** de mesma página. Para elementos usados repetidamente utilizar **classes**.
* Evitar a estilização por **IDs**, estilizar pela **classe**.
* Utilizar nomes que reflitam o propósito do elemento em questão e que almejem sua reusabilidade. Não utilizar nomes enigmáticos ou de apresentação.
    * Por exemplo, ao invés de usar `.site-nav`, escolha algo como `.primary-nav`, em vez de `.footer-links`, prefira algo como `.sub-links`.

Utilizar nomes o **mais curtos possíveis**, mas longos o suficiente para que mantenham **coerência de entendimento**.

```css
/* Not recommended */
#navigation {}
.button {}

/* Recommended */
#nav {}
.btn {}
```

### Nomenclatura BEM (Bloco, Elemento, Modificador)

1. **Bloco:** O componente raiz
2. **Elemento:** Um componente parte do bloco.
3. **Modificador:** Uma variante ou extensão do bloco.

Para fazer uma analogia:

```css
.person {}
.person__head {}
.person--tall {}
```

- `.person {}` é o bloco, o componente raíz.
- `.person__head {}` é um componente parte do bloco `.person {}`. 
- Finalmente, `.person--tall {}` é um modificador, uma variante específica do bloco `.person {}`.

No html, a estrutura destes elementos fica:

```html
<div class="person person--tall">
    <div class="person__head">
        …
    </div>
</div>
```

### Organização
#### Estrutura **Top-down**
Estruturar a ordenação de estilos no modelo **top-down**, ou seja, organizar o **css** de acordo com a ordem da estrutura do **html**.

1. Generic classes (`body`, `a`, `p`, `h1`, etc.)
2. Components (`forms`, `colunas`, `grids`, etc)
3. `header`
4. `footer`
5. specific

#### Comentários
Utilizar comentários para separar seções.

```css
/******************************************************************************/
/* Header */
/******************************************************************************/

/******************************************************************************/
/* Footer */
/******************************************************************************/
```

## JS
### Variáveis
* Utilize a notação **CamelCase** iniciando por minúscula para nomes de variável. Ex.: `nomeDaVariavel`
* Prefira `'`(aspas simples) a `"`(aspas duplas) na declaração de **strings**. Dessa maneira é mais simples manter strings com **html**:

```javascript
var msg = '<p class="message">This is some HTML</p>';
```

* Elementos **jQuery** devem possuir o prefixo `$`. Ex.: `var $el = $(this);`
* Declare variáveis agrupadas no topo da função sempre que possível. Ex.:

```javascript
var currentEntry, // currently selected table entry
	level,        // indentation level
    size;         // size of table
```

* Use `{}` em vez de `new Object()`.
* Use `[]` em vez de `new Array()`.

### Comentários
Escreva comentários significativos. Foque em explicações que não estejam explícitas no código.

### Use espaços em branco
Preze pela **legibilidade** do código. De acordo com os exemplos:

```javascript
if (condition) {
    statements
} else if (condition) {
    statements
} else {
    statements
}
```

```javascript
function outer(c, d) {
    var e = c * d;

    function inner(a, b) {
        return (e * a) + b;
    }

    return inner(0, 1);
}
```

### preventDefault
O comportamento padrão de um link, por exemplo, é direcionar o usuário ao recurso especificado no parâmetro `href`. Muitas vezes, no entanto, utilizamos **js** para modificar esse comportamento, abrindo um modal, expandindo uma seção etc. Para que a ação-padrão do evento não seja disparada, ou seja, para que o link apenas abra o modal e não direcione o usuário a outro recurso, é necessário chamar o método `preventDefault`, tanto em **JavaScript nativo** quanto no framework **jQuery**.

É importante que essa seja a **primeira instrução**, pois do contrário, será impossível visualizar quaisquer erros que ocorram, já que o usuário será direcionado a outro recurso. Ao invés de:

```javascript
$('.selector').click(function (e) {
    $('.foo').show();
    $('.bar').hidden();
    
    e.preventDefault();
});
```
escreva:
```javascript
$('.selector').click(function (e) {
    e.preventDefault();

    $('.foo').show();
    $('.bar').hidden();
});
```

### Outras recomendações
* Código **javascript** não deve ser escrito diretamente no **html** exceto quando for um pequeno trecho de código válido apenas em uma sessão do projeto.
* Tags devem ser inseridas **antes** do fechamento da tag `body`. Isso reduz o efeito de atraso no carregamento de outros recursos da página devido ao carregamento de `scripts`.
* Comparações apenas com `===` e `!==`.
Utilize `;` (ponto-e-vírgula) no final de toda declaração simples.

## Ferramentas Úteis
* [Google Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [Extensão Chrome: Developer Checklist](https://chrome.google.com/webstore/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp)
* [Editorconfig.org](http://editorconfig.org/)
* [Can I Use](http://caniuse.com/)
* [HTML5please](http://html5please.com/)

## TODO
* SUGESTÃO: Browserstack para testes
* Testar atributos booleanos sem valor (IE8)
* **rem** ou **px**?

## Referências
* https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml
* http://isobar-idev.github.io/code-standards/
* http://www.bbc.co.uk/guidelines/futuremedia/technical/semantic_markup.shtml
* http://code.tutsplus.com/tutorials/30-css-best-practices-for-beginners--net-6741
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS
* http://cssguidelin.es/
* http://extranet.dzestudio.com.br/article/show/id/62
* https://github.com/ginatrapani/ThinkUp/wiki/Code-Style-Guide
* https://litmus.com/blog/background-colors-html-email
* http://pt.wikipedia.org/wiki/JavaScript
* https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault
* http://api.jquery.com/event.preventdefault/
