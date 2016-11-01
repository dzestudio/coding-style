# CSS / Preprocessadores

- [Regras Gerais](#regras-gerais)
- [Formatação](#formatação-1)
- [Ordenamento de Propriedades](#ordenamento-de-propriedades)
- [Preprocessadores (Less, Sass, ...)](#preprocessadores-less-sass-)
- [Seletores](#seletores)
- [IDs e Classes](#ids-e-classes)
- [Nomenclatura BEM (Bloco, Elemento, Modificador](#nomenclatura-bem-bloco-elemento-modificador)
- [Organização](#organização)
- [Comentários](#comentários-1)

## Regras Gerais
* Não utilizar **CSS inline** no documento.
* Declarar cores em hexadecimal de **3 dígitos** sempre que possível (em **newsletters** utilizar sempre **6 dígitos**).
* Utilizar **image sprites** sempre que possível.
* Utilizar unidades em `px` (inclusive fontes) e `line-height` sem unidade definida.

## Formatação
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

## Ordenamento de Propriedades
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

## Preprocessadores (Less, Sass, …)
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

## Seletores
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

## IDs e Classes
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

## Nomenclatura BEM (Bloco, Elemento, Modificador)

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

## Organização
### Estrutura **Top-down**
Estruturar a ordenação de estilos no modelo **top-down**, ou seja, organizar o **css** de acordo com a ordem da estrutura do **html**.

1. Generic classes (`body`, `a`, `p`, `h1`, etc.)
2. Components (`forms`, `colunas`, `grids`, etc)
3. `header`
4. `footer`
5. specific

### Comentários
Utilizar comentários para separar seções.

```css
/******************************************************************************/
/* Header */
/******************************************************************************/

/******************************************************************************/
/* Footer */
/******************************************************************************/
```