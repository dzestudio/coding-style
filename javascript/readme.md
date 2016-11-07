# JavaScript
Nosso estilo é baseado no [javascript standard style](http://standardjs.com/).

- [Variáveis](#variáveis)
- [Comentários](#comentários-2)
- [Use Espaços em Branco](#use-espaços-em-branco)
- [PreventDefault](#preventdefault)
- [Outras Recomendações](#outras-recomendações)

## Regras que devem ser validadas automaticamente
Algumas das regras que seguimos **devem** ser validadas automaticamente. Para isso, [veja a receita disponível](../recipes/javascript-coding-style).

## Regras gerais
* Utilize a notação **camelCase** iniciando por minúscula para nomenclatura geral. Ex.: `nomeDaVariavel`, `function handleClick () {}`
* Se estiver utilizando classes, utilize **PascalCase** para o nome da classe e nome do arquivo relacionado. Ex.: `CalendarWidget.jsx`

## Variáveis
* Prefira `'`(aspas simples) a `"`(aspas duplas) na declaração de **strings**. Dessa maneira é mais simples manter strings com **html**:

```javascript
var msg = '<p class="message">This is some HTML</p>'
```

* Elementos **jQuery** devem possuir o prefixo `$`. Ex.: `var $el = $(this)`
* Declare variáveis agrupadas no topo da função ou bloco sempre que possível. Ex.:

```javascript
var currentEntry // currently selected table entry
var level        // indentation level
var size         // size of table
```

* Use `{}` em vez de `new Object()`.
* Use `[]` em vez de `new Array()`.

## Comentários
Escreva comentários significativos. Foque em explicações que não estejam explícitas no código.

## Use espaços em branco
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
function outer (c, d) {
    var e = c * d

    function inner (a, b) {
        return (e * a) + b
    }

    return inner(0, 1)
}
```

## preventDefault
O comportamento padrão de um link, por exemplo, é direcionar o usuário ao recurso especificado no parâmetro `href`. Muitas vezes, no entanto, utilizamos **js** para modificar esse comportamento, abrindo um modal, expandindo uma seção etc. Para que a ação-padrão do evento não seja disparada, ou seja, para que o link apenas abra o modal e não direcione o usuário a outro recurso, é necessário chamar o método `preventDefault`, tanto em **JavaScript nativo** quanto no framework **jQuery**.

É importante que essa seja a **primeira instrução**, pois do contrário, será impossível visualizar quaisquer erros que ocorram, já que o usuário será direcionado a outro recurso. Ao invés de:

```javascript
$('.selector').click(function (e) {
    $('.foo').show()
    $('.bar').hidden()
    
    e.preventDefault()
})
```
escreva:
```javascript
$('.selector').click(function (e) {
    e.preventDefault()

    $('.foo').show()
    $('.bar').hidden()
})
```

## Recomendações
* Se estiver utilizando um processo de build de javascript, aproveite para utilizar recursos do ES2015 como `let` e `const`, template strings e destructuring assignments.
* Código **javascript** não deve ser escrito diretamente no **html** exceto quando for um pequeno trecho de código, necessário apenas em uma sessão do projeto. Ex.: Landing pages de uma página.
* Tags devem ser inseridas **antes** do fechamento da tag `body`. Isso reduz o efeito de atraso no carregamento de outros recursos da página devido ao carregamento de `scripts`.
