# TO-DO API com Nest.js, Swagger, MySQL e Docker

Este é um projeto de API TO-DO desenvolvido utilizando Nest.js, documentado com Swagger, integrado ao MySQL e empacotado em contêineres Docker.

## Configuração Inicial

Antes de começar, certifique-se de ter o Node.js, npm e Docker instalados em sua máquina.

1. Clone o repositório:

    ```bash
    git clone https://github.com/leonardosugahara/nest-todo-api
    cd nest-todo-api
    ```

## Configuração do MySQL

3. No arquivo `docker-compose.yml`, ajuste as configurações do serviço MySQL conforme necessário:

    ```yaml
    mysql:
      image: mysql:latest
      environment:
        MYSQL_ROOT_PASSWORD: root_senha
        MYSQL_DATABASE: todo_db
        MYSQL_USER: seu_usuario
        MYSQL_PASSWORD: sua_senha
      ports:
        - "3306:3306"
      networks:
        - app-network
    ```

    Certifique-se de substituir `root_senha`, `seu_usuario`, e `sua_senha` pelos valores desejados. 
    Não esqueça de alterar o arquivo `app.module.ts` com os mesmos valores.

## Executando o Nest.js App

4. Execute o Docker Compose para iniciar os contêineres:

    ```bash
    docker-compose up
    ```

    Acesse a API em [http://localhost:3000](http://localhost:3000).

## Documentação com Swagger

5. Acesse a documentação Swagger em [http://localhost:3000/api](http://localhost:3000/api).

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.