# Javascript coding style
Este documento exemplifica como validar o estilo de código JavaScript automaticamente utilizando NPM e o pacote standard js.

## Instalação
* Adicione o pacote standard ao seu arquivo `package.json` no projeto. Ex.: `npm install standard --save-dev`
* Adicione um novo script aos NPM scripts, ou integre o standard com seu processo de build.

Ao utilizar o comando `standard`, a ferramenta automaticamente valida todos arquivos `.js` e `.jsx` do projeto. Para validar um arquivo específico, utilize `standard <nome-do-arquivo>`.