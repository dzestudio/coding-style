# HTML

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

## Formatação
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

## Doctype
Utilizar Doctype do **html 5**

`<!doctype html>`

## Codificação
Usar **UTF-8 (no BOM)**

`<meta charset="utf-8">`

## Viewport
Utilize a metatag viewport padrão a seguir. Caso seja necessário, pode-se utilizar o parâmetro opcional `user-scalable=no` para evitar que os usuários usem o *"pinch-n-zoom"*.

Caso os valores padrão sejam alterados, lembre de alterá-los na regra `@viewport` no **CSS**.
`<meta name="viewport" content="width=device-width, initial-scale=1">`

## Previnir Modo de Compatibilidade do IE
Algumas vezes o navegador **IE** pode entrar indesejavelmente em **Modo de Compatibilidade**. Para prevenir este comportamento, utilizar a meta tag:

`<meta http-equiv="x-ua-compatible" content="ie=edge">`

## Atributos Type
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

## Comentários
Utilizar comentários que auxiliem na compreensão dos elementos como cabeçalhos, sidebars e seções do documento.

```html
<!-- Example -->
<div class="example">
    <p>Content</p>
</div>
```

## Itens de Ação
Marcar com `TODO` seguido de um texto informativo os itens que necessitam ser finalizados.

```html
<!-- TODO: remove optional tags -->
<ul>
    <li>Apples</li>
    <li>Oranges</li>
</ul>
```

## Títulos
* Todas as páginas devem conter elementos de título e respeitar a ordem hierárquica de níveis entre os mesmos (`h1`, `h2`, `h3`...).
* O `h1` deve aparecer somente uma vez por página. Na **home**, pode ser utilizado junto a **marcação do logotipo**. Nas internas, deve ser utilizado no **assunto principal** da página.

## Listas
* Itens de lista devem sempre estar dentro de elementos `ul`, `ol` ou `dl`. Nunca dentro de `div`, `p`, ou demais elementos.
* As listas devem ser utilizadas semanticamente: `ul` para itens onde a ordem não tem importância, `ol` para itens ordinais e `dl` para listas com termos de definição e suas definições.

## Formulários
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

## Tabelas
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