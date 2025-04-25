# Docker API 🐳

Projeto de estudo sobre Docker, explorando conceitos como containers, imagens, volumes e Docker Compose. O objetivo é criar uma API Node.js conectada a um banco de dados PostgreSQL, tudo rodando em containers Docker.

## 📌 O que é Docker?

Docker é uma plataforma que facilita a criação, deployment e execução de aplicações em **containers**.

### Principais conceitos:

- **Dockerfile**: "Receita" para construir uma imagem Docker.
- **Imagem**: Pacote com todas as dependências,bibliotecas, código fonte, variáveis de ambiente e configuração necessárias para executar uma aplicação.
- **Container**: Ambiente isolado com tudo que sua aplicação precisa para funcionar (código, dependências, bibliotecas), é uma instancia de uma imagem docker.
- **Volume**: Mecanismo para persistir dados gerados por containers.

## 🛠️ Comandos Básicos

🔧 Imagens

### 🔧 Imagens

| Comando                              | Descrição                                 |
| ------------------------------------ | ----------------------------------------- |
| `docker build -t nome-da-imagem .`   | Cria uma imagem a partir do Dockerfile    |
| `docker build -t nome:v1 .`          | Cria imagem com tag (versão) especificada |
| `docker image ls` ou `docker images` | Lista imagens disponíveis                 |
| `docker rmi nome-ou-id`              | Remove uma imagem Docker                  |
| `docker history nome-ou-id`          | Mostra o histórico de camadas da imagem   |

### 🧱 Containers

| Comando                                     | Descrição                                     |
| ------------------------------------------- | --------------------------------------------- |
| `docker run -p 3333:3333 -d nome-da-imagem` | Cria e executa container em background        |
| `docker ps`                                 | Lista containers em execução                  |
| `docker ps -a`                              | Lista todos os containers (ativos e inativos) |
| `docker stop id-ou-nome`                    | Para o container                              |
| `docker pause id` / `docker unpause id`     | Pausa / despausa um container                 |
| `docker container prune`                    | Remove todos os containers parados            |

### 📁 Volumes

| Comando                                | Descrição                    |
| -------------------------------------- | ---------------------------- |
| `docker volume create nome-do-volume`  | Cria um volume               |
| `docker volume ls`                     | Lista volumes                |
| `docker volume inspect nome-do-volume` | Mostra detalhes de um volume |
| `docker volume rm nome`                | Remove volume                |

### 🔍 Execução e Acesso

| Comando                               | Descrição                                               |
| ------------------------------------- | ------------------------------------------------------- |
| `docker exec -it id-container sh`     | Entra no ambiente do container                          |
| `touch arquivo.txt`                   | Cria um arquivo (ex: para testar persistência de dados) |
| `ls`                                  | Lista os arquivos dentro do container                   |
| `exit`                                | Sai do container                                        |
| `docker logs id-ou-nome`              | Mostra os logs do container                             |
| `docker container inspect id-ou-nome` | Mostra detalhes do container                            |

## 🔄 Docker Compose

Ferramenta para orquestrar múltiplos containers. Configurado via arquivo `docker-compose.yml`, permite subir toda a infraestrutura com um único comando:

| Comando                | Descrição                                              |
| ---------------------- | ------------------------------------------------------ |
| `docker-compose up`    | Lê o `docker-compose.yml` e sobe os serviços           |
| `docker-compose up -d` | Sobe os serviços em segundo plano (background)         |
| `docker-compose down`  | Para e remove os containers, redes e volumes definidos |

💡 **Dica:** Use `docker-compose` para simplificar a criação de ambientes com múltiplos containers (ex: API + banco de dados).
