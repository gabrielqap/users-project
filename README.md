# users-project
Api feita em Nodejs para realizar um CRUD de usuários.

## Instalação
Para execuar é necessário instalar o Nodejs. Sua execução vai variar de acordo com seu sistema operacional. Com isso, recomenda-se que se visite o site do Nodejs e baixe em: https://nodejs.org/en/ . Para esse projeto foi utilizada a versão 14.4.0

Em seguida, faça a instalação do mongodb. No ubuntu foram realizado os seguintes comandos:

```bash
sudo apt update
sudo apt install -y mongodb
```
Verifique se o banco está rodando 

```
sudo systemctl status mongodb
```
Se sim, agora basta executar o projeto na pasta

```
npm run dev
```
