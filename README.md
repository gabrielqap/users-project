# users-project
Api feita em Nodejs para realizar um CRUD de usuários.

## Instalação
Para executar é necessário instalar o Nodejs. Sua execução vai variar de acordo com seu sistema operacional. Por isso, recomenda-se que se visite o site do Nodejs e baixe em: https://nodejs.org/en/ . Para esse projeto foi utilizada a versão 14.4.0

Em seguida, faça a instalação do mongodb. No ubuntu foram realizado os seguintes comandos:

```bash
sudo apt update
sudo apt install -y mongodb
```
Verifique se o banco está rodando, pois é necessário que sim.

```
sudo systemctl status mongodb
```

## Execução

Feito todas as intruçes anteriores, basta executar o projeto na pasta

```
npm install
npm run dev
```

Para verificar se está rodando, acesse no navegador atraves de:

http://localhost:3001/api/users
