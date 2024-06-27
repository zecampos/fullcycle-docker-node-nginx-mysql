# fullcycle-docker-node-nginx-mysql
Esse repositório destina-se ao desafio do curso de docker da fullcycle, na qual o usuário acessa localhost:80808 e o retorno será uma pagina html com uma lista de nomes gravados no mysql, cada vez que o usuário acessa a página, é gravado um nome aleatório.

A idéia é utilizar o nginx como proxy reverso e direcionar as requisicões para a aplicacão nodejs, que conecta com o mysql.
