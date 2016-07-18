### Intro
O repositório contém as principais bandeiras de bancos/cartões brasileiros para utilização em páginas HTML. Qualquer logo/bandeira é acessível através de suas respectivas classes CSS.

### Dependências
Bower gulp previamente instalados no ambiente, em seguida executar os seguintes comandos no console em qualquer ordem:
```
$ gulp install
$ bower install
```

### Adicionando novas imagens
Para adicionar novas imagens/logos/bandeiras coloque o SVG desejado dentro da pasta icons, é desejado mas não necessário que o novo icone siga os mesmos padrões de tamanhos dos atuais ícones existentes. Escolha o nome do ícone com cuidado pois ele sera usado para gerar o nome da classe.
Uma vez adicionado os novos SVGS/icones basta rodar o seguinte comando que os arquivos de css e SVG serão atualizados.
```
$ gulp
```
