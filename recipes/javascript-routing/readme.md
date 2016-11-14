# Roteamento JavaScript

O arquivo `main.js` possui um roteador para código javascript que deve ser executado quando uma página é carregada.
Ele decide qual bloco de javascript deve ser carregado baseado no *controller* e/ou *action* da página atual.

Primeiramente o bloco `common` é executado - tornando-o o bloco 'global'. 
Após isso, o script verifica se existe um objeto `init` dentro da declaração com o nome da controller atual.
**Esse código é executado em todas as páginas da controller**. 
Por fim, ele procura um objecto com o nome da action dentro da declaração com nome da controller (ex.: `storesController/show = stores.show()`) e executa-a.

## Integrações

Essa receita funciona bem com frameworks MVC que conseguem expor o nome da controller e da action na *view* através de *helpers*.
Verifique os comentários do arquivo `main.js` para um exemplo.

Também é possível separar os blocos em diversos arquivos para melhor a organização e `import`á-los com [webpack](), browserify ou alguma outra ferramenta de concatenação de javascript

## Referências
https://www.viget.com/articles/extending-paul-irishs-comprehensive-dom-ready-execution
